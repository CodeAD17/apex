"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { MotionValue, useTransform } from "framer-motion";

interface ApexScrollCanvasProps {
    scrollYProgress: MotionValue<number>;
    totalFrames?: number;
    imageFolderPath?: string;
    className?: string;
}

export default function ApexScrollCanvas({
    scrollYProgress,
    totalFrames = 192,
    imageFolderPath = "/images",
    className = "",
}: ApexScrollCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);
    const currentFrameRef = useRef(0);
    const animationFrameRef = useRef<number>();

    // Transform scroll progress to frame index
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

    // Generate image paths
    const getImagePath = useCallback(
        (index: number) => {
            // Format: ezgif-frame-001.jpg, ezgif-frame-002.jpg, etc.
            const frameNumber = String(index + 1).padStart(3, "0");
            return `${imageFolderPath}/ezgif-frame-${frameNumber}.jpg`;
        },
        [imageFolderPath]
    );

    // Preload all images
    useEffect(() => {
        const loadImages = async () => {
            const imagePromises: Promise<HTMLImageElement>[] = [];
            let loadedCount = 0;

            for (let i = 0; i < totalFrames; i++) {
                const promise = new Promise<HTMLImageElement>((resolve, reject) => {
                    const img = new Image();
                    img.onload = () => {
                        loadedCount++;
                        setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
                        resolve(img);
                    };
                    img.onerror = () => {
                        console.warn(`Failed to load image: ${getImagePath(i)}`);
                        // Resolve with empty image to avoid breaking the sequence
                        loadedCount++;
                        setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
                        resolve(img);
                    };
                    img.src = getImagePath(i);
                });
                imagePromises.push(promise);
            }

            try {
                const loadedImages = await Promise.all(imagePromises);
                setImages(loadedImages);
                setImagesLoaded(true);
            } catch (error) {
                console.error("Error loading images:", error);
            }
        };

        loadImages();
    }, [totalFrames, getImagePath]);

    // Setup canvas with high DPI support
    const setupCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Get device pixel ratio for Retina/4K support
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        // Set canvas size accounting for pixel ratio
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        // Scale the context to ensure correct drawing
        ctx.scale(dpr, dpr);

        // Set canvas CSS size
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;

        return ctx;
    }, []);

    // Draw frame with object-fit: contain logic
    const drawFrame = useCallback(
        (frameIdx: number) => {
            const canvas = canvasRef.current;
            if (!canvas || !imagesLoaded || images.length === 0) return;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            const img = images[frameIdx];
            if (!img || !img.complete || img.naturalWidth === 0) return;

            const dpr = window.devicePixelRatio || 1;
            const canvasWidth = canvas.width / dpr;
            const canvasHeight = canvas.height / dpr;

            // Clear canvas
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);

            // Calculate object-fit: contain dimensions
            const imgAspect = img.naturalWidth / img.naturalHeight;
            const canvasAspect = canvasWidth / canvasHeight;

            let drawWidth, drawHeight, drawX, drawY;

            if (imgAspect > canvasAspect) {
                // Image is wider - fit to width
                drawWidth = canvasWidth;
                drawHeight = canvasWidth / imgAspect;
                drawX = 0;
                drawY = (canvasHeight - drawHeight) / 2;
            } else {
                // Image is taller - fit to height
                drawHeight = canvasHeight;
                drawWidth = canvasHeight * imgAspect;
                drawX = (canvasWidth - drawWidth) / 2;
                drawY = 0;
            }

            // Draw image
            ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        },
        [images, imagesLoaded]
    );

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setupCanvas();
            drawFrame(currentFrameRef.current);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [setupCanvas, drawFrame]);

    // Subscribe to scroll progress and render frames
    useEffect(() => {
        if (!imagesLoaded) return;

        const unsubscribe = frameIndex.on("change", (value) => {
            const frame = Math.round(value);
            if (frame !== currentFrameRef.current && frame >= 0 && frame < totalFrames) {
                currentFrameRef.current = frame;

                // Use requestAnimationFrame for smooth rendering
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }
                animationFrameRef.current = requestAnimationFrame(() => {
                    drawFrame(frame);
                });
            }
        });

        // Draw initial frame
        drawFrame(0);

        return () => {
            unsubscribe();
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [frameIndex, drawFrame, imagesLoaded, totalFrames]);

    return (
        <div className={`absolute inset-0 ${className}`}>
            {/* Loading indicator */}
            {!imagesLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-apex-black z-50">
                    <div className="relative">
                        {/* Loading ring */}
                        <svg className="w-24 h-24 animate-spin" viewBox="0 0 100 100">
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                stroke="rgba(31, 31, 31, 0.5)"
                                strokeWidth="8"
                                fill="none"
                            />
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                stroke="url(#gradient)"
                                strokeWidth="8"
                                fill="none"
                                strokeDasharray={`${loadProgress * 2.51} 251`}
                                strokeLinecap="round"
                                transform="rotate(-90 50 50)"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#E10600" />
                                    <stop offset="100%" stopColor="#D4AF37" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Percentage */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-orbitron text-2xl text-white">
                                {loadProgress}%
                            </span>
                        </div>
                    </div>

                    <p className="mt-6 font-rajdhani text-white/60 tracking-wider uppercase text-sm">
                        Loading Experience
                    </p>

                    {/* Loading bar */}
                    <div className="mt-4 w-48 h-1 bg-carbon-gray rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-apex-red to-apex-gold transition-all duration-300"
                            style={{ width: `${loadProgress}%` }}
                        />
                    </div>
                </div>
            )}

            {/* Canvas */}
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{
                    opacity: imagesLoaded ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                }}
            />

            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 gradient-overlay pointer-events-none" />
        </div>
    );
}
