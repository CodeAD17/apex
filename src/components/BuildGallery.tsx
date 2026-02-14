"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Use some of the loaded frames as gallery previews
const galleryItems = [
    { id: 1, frame: "ezgif-frame-010.jpg", title: "BMW M4 Competition", category: "Ceramic Coating" },
    { id: 2, frame: "ezgif-frame-030.jpg", title: "Mercedes AMG GT", category: "Full PPF" },
    { id: 3, frame: "ezgif-frame-050.jpg", title: "Porsche 911 GT3", category: "Custom Build" },
    { id: 4, frame: "ezgif-frame-070.jpg", title: "Audi RS7", category: "Detail & Tune" },
    { id: 5, frame: "ezgif-frame-090.jpg", title: "Lamborghini Huracán", category: "Paint Correction" },
    { id: 6, frame: "ezgif-frame-110.jpg", title: "McLaren 720S", category: "PPF + Ceramic" },
];

export default function BuildGallery() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [activeFilter, setActiveFilter] = useState("All");

    const filters = ["All", "Ceramic Coating", "Full PPF", "Custom Build", "Detail & Tune"];

    return (
        <section
            id="gallery"
            ref={ref}
            className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20 bg-carbon-gray/20"
        >
            {/* Background pattern - reduced on mobile */}
            <div className="absolute inset-0 opacity-[0.03] sm:opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,175,55,0.3) 1px, transparent 0)`,
                        backgroundSize: "30px 30px",
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                        <div className="w-8 sm:w-12 h-px bg-apex-gold" />
                        <span className="font-rajdhani text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-apex-gold uppercase">
                            Our Work
                        </span>
                        <div className="w-8 sm:w-12 h-px bg-apex-gold" />
                    </div>

                    <h2 className="font-orbitron font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wider text-white">
                        BUILD{" "}
                        <span className="text-apex-gold">GALLERY</span>
                    </h2>

                    <p className="mt-4 sm:mt-6 max-w-2xl mx-auto font-rajdhani text-sm sm:text-base md:text-lg text-white/60 px-2">
                        Explore our portfolio of custom builds, detailed finishes, and
                        performance transformations.
                    </p>
                </motion.div>

                {/* Filter Tabs - horizontal scroll on mobile */}
                <motion.div
                    className="flex overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 }}
                >
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={cn(
                                "flex-shrink-0 px-3 sm:px-5 py-1.5 sm:py-2 font-rajdhani text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 touch-manipulation",
                                activeFilter === filter
                                    ? "bg-apex-red text-white border border-apex-red"
                                    : "bg-transparent text-white/60 border border-white/20 hover:border-apex-gold/50 hover:text-white active:border-apex-gold"
                            )}
                        >
                            {filter}
                        </button>
                    ))}
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {galleryItems.map((item, index) => (
                        <GalleryCard
                            key={item.id}
                            item={item}
                            index={index}
                            isInView={isInView}
                            isVisible={activeFilter === "All" || activeFilter === item.category}
                        />
                    ))}
                </div>

                {/* View More Button */}
                <motion.div
                    className="mt-10 sm:mt-14 md:mt-16 text-center"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                >
                    <button className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-apex-red hover:bg-transparent active:bg-apex-red/80 border border-apex-red transition-all duration-300 touch-manipulation">
                        <span className="font-orbitron text-xs sm:text-sm tracking-wider text-white">
                            VIEW FULL GALLERY
                        </span>
                        <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

// ========================================
// GALLERY CARD
// ========================================

interface GalleryCardProps {
    item: (typeof galleryItems)[0];
    index: number;
    isInView: boolean;
    isVisible: boolean;
}

function GalleryCard({ item, index, isInView, isVisible }: GalleryCardProps) {
    return (
        <motion.div
            className={cn(
                "group relative aspect-[4/3] overflow-hidden cursor-pointer touch-manipulation",
                !isVisible && "hidden"
            )}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Image */}
            <Image
                src={`/images/${item.frame}`}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-apex-black via-apex-black/50 to-transparent opacity-70 sm:opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                {/* Category tag */}
                <motion.div
                    className="mb-2 sm:mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 bg-apex-red/80 font-rajdhani text-[10px] sm:text-xs tracking-wider uppercase text-white">
                        {item.category}
                    </span>
                </motion.div>

                {/* Title */}
                <h3 className="font-orbitron font-semibold text-lg sm:text-xl md:text-2xl tracking-wider text-white group-hover:text-apex-gold transition-colors duration-300">
                    {item.title}
                </h3>

                {/* View button - hidden on mobile, appears on hover on desktop */}
                <motion.div
                    className="mt-3 sm:mt-4 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <span className="inline-flex items-center gap-1.5 sm:gap-2 font-rajdhani text-xs sm:text-sm tracking-wider text-apex-gold">
                        VIEW PROJECT
                        <svg
                            className="w-3 h-3 sm:w-4 sm:h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </span>
                </motion.div>
            </div>

            {/* Frame borders - hidden on mobile */}
            <div className="absolute inset-2 sm:inset-4 border border-white/0 group-hover:border-apex-gold/30 transition-colors duration-500 pointer-events-none hidden sm:block">
                {/* Corner accents */}
                <span className="absolute -top-px -left-px w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-apex-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute -top-px -right-px w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-apex-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute -bottom-px -left-px w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-apex-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute -bottom-px -right-px w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-apex-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </motion.div>
    );
}
