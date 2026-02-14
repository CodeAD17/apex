"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { hudPhases } from "@/data/apexData";

interface ApexExperienceProps {
    scrollYProgress: MotionValue<number>;
    className?: string;
}

export default function ApexExperience({
    scrollYProgress,
    className = "",
}: ApexExperienceProps) {
    // Phase visibility transforms
    const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.33], [0, -50]);

    const servicesOpacity = useTransform(
        scrollYProgress,
        [0.28, 0.35, 0.58, 0.66],
        [0, 1, 1, 0]
    );
    const servicesY = useTransform(scrollYProgress, [0.28, 0.35], [50, 0]);

    const performanceOpacity = useTransform(
        scrollYProgress,
        [0.60, 0.70, 0.95, 1],
        [0, 1, 1, 0.8]
    );
    const performanceX = useTransform(scrollYProgress, [0.60, 0.70], [100, 0]);

    return (
        <div
            className={cn(
                "absolute inset-0 pointer-events-none overflow-hidden",
                className
            )}
        >
            {/* Scan line effect */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <motion.div
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-apex-gold to-transparent"
                    animate={{
                        y: ["-100%", "100vh"],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            {/* HUD Frame Elements */}
            <HUDFrame />

            {/* PHASE 1: HERO (0% - 33%) */}
            <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ opacity: heroOpacity, y: heroY }}
            >
                <HeroPhase />
            </motion.div>

            {/* PHASE 2: SERVICES (33% - 66%) */}
            <motion.div
                className="absolute inset-0 flex items-center justify-start px-8 md:px-16"
                style={{ opacity: servicesOpacity, y: servicesY }}
            >
                <ServicesPhase />
            </motion.div>

            {/* PHASE 3: PERFORMANCE (66% - 100%) */}
            <motion.div
                className="absolute inset-0 flex items-center justify-end px-8 md:px-16"
                style={{ opacity: performanceOpacity, x: performanceX }}
            >
                <PerformancePhase />
            </motion.div>

            {/* Bottom scroll indicator */}
            <ScrollIndicator scrollYProgress={scrollYProgress} />
        </div>
    );
}

// ========================================
// HUD FRAME ELEMENTS
// ========================================

function HUDFrame() {
    return (
        <>
            {/* Corner brackets - smaller on mobile */}
            <div className="absolute top-4 left-4 w-10 h-10 sm:top-6 sm:left-6 sm:w-12 sm:h-12 md:top-8 md:left-8 md:w-24 md:h-24">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-apex-gold to-transparent" />
                <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-apex-gold to-transparent" />
            </div>

            <div className="absolute top-4 right-4 w-10 h-10 sm:top-6 sm:right-6 sm:w-12 sm:h-12 md:top-8 md:right-8 md:w-24 md:h-24">
                <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-apex-gold to-transparent" />
                <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-apex-gold to-transparent" />
            </div>

            <div className="absolute bottom-20 left-4 w-10 h-10 sm:bottom-8 sm:left-6 sm:w-12 sm:h-12 md:bottom-8 md:left-8 md:w-24 md:h-24">
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-apex-gold to-transparent" />
                <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-apex-gold to-transparent" />
            </div>

            <div className="absolute bottom-20 right-4 w-10 h-10 sm:bottom-8 sm:right-6 sm:w-12 sm:h-12 md:bottom-8 md:right-8 md:w-24 md:h-24">
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-apex-gold to-transparent" />
                <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-apex-gold to-transparent" />
            </div>

            {/* Side accent lines - hidden on mobile */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-1 h-8 bg-apex-gold/30"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: i * 0.1 }}
                    />
                ))}
            </div>
        </>
    );
}

// ========================================
// HERO PHASE
// ========================================

function HeroPhase() {
    const content = hudPhases.hero.content;

    return (
        <div className="text-center px-3 sm:px-4 max-w-full overflow-hidden">
            {/* Status indicator - smaller on mobile */}
            <motion.div
                className="flex items-center justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-apex-red rounded-full animate-pulse" />
                <span className="font-rajdhani text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-apex-gold/80 uppercase">
                    Premium Automotive Care
                </span>
            </motion.div>

            {/* Main Logo Image - responsive sizing */}
            <motion.div
                className="relative w-[220px] h-[110px] xs:w-[260px] xs:h-[130px] sm:w-[320px] sm:h-[160px] md:w-[450px] md:h-[225px] lg:w-[600px] lg:h-[300px] mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <Image
                    src="/apex-hero-logo.png"
                    alt="APEX Auto Detailing Studio"
                    fill
                    className="object-contain drop-shadow-[0_0_20px_rgba(225,6,0,0.3)] sm:drop-shadow-[0_0_30px_rgba(225,6,0,0.3)]"
                    priority
                />
            </motion.div>

            {/* Subtitle with HUD styling - mobile optimized */}
            <motion.div
                className="mt-2 sm:mt-4 md:mt-6 relative inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <div className="hud-border px-3 py-2 sm:px-6 sm:py-3 md:px-10 md:py-4">
                    <p className="font-rajdhani text-sm sm:text-lg md:text-2xl tracking-[0.1em] sm:tracking-[0.2em] text-white/90 uppercase">
                        {content.subtitle}
                    </p>
                </div>
            </motion.div>

            {/* Tagline - hidden on very small screens */}
            <motion.p
                className="hidden xs:block mt-4 sm:mt-6 md:mt-8 font-rajdhani text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.4em] text-apex-gold/70 uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                {content.description}
            </motion.p>

            {/* CTA Buttons - mobile optimized */}
            <motion.div
                className="mt-5 sm:mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pointer-events-auto w-full px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-apex-red hover:bg-apex-red/90 active:bg-apex-red/80 transition-colors touch-manipulation">
                    <span className="font-orbitron text-xs sm:text-sm tracking-wider text-white">
                        BOOK SERVICE
                    </span>
                    <span className="absolute inset-0 border border-apex-red group-hover:border-apex-gold transition-colors" />
                </button>

                <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-white/30 hover:border-apex-gold active:border-apex-gold/80 transition-colors touch-manipulation">
                    <span className="font-orbitron text-xs sm:text-sm tracking-wider text-white/80 group-hover:text-white transition-colors">
                        VIEW GALLERY
                    </span>
                </button>
            </motion.div>

            {/* Decorative line - smaller on mobile */}
            <motion.div
                className="mt-6 sm:mt-12 w-px h-10 sm:h-16 bg-gradient-to-b from-apex-gold/50 to-transparent mx-auto hidden sm:block"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
            />
        </div>
    );
}

// ========================================
// SERVICES PHASE
// ========================================

function ServicesPhase() {
    const content = hudPhases.services.content;

    return (
        <div className="max-w-xs sm:max-w-sm md:max-w-md px-2 sm:px-0">
            {/* Phase indicator */}
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
                <div className="w-5 sm:w-8 h-px bg-apex-red" />
                <span className="font-rajdhani text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-apex-red uppercase">
                    What We Offer
                </span>
            </div>

            {/* Title */}
            <h2 className="font-orbitron font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider text-white mb-4 sm:mb-8 line-accent">
                {content.title}
            </h2>

            {/* Services List */}
            <div className="space-y-2.5 sm:space-y-4">
                {content.items.map((service, index) => (
                    <motion.div
                        key={service}
                        className="group flex items-center gap-2 sm:gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {/* Indicator */}
                        <div className="relative flex-shrink-0">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 border border-apex-gold/50 rotate-45" />
                            <div className="absolute inset-0 w-2 h-2 sm:w-3 sm:h-3 bg-apex-gold/30 rotate-45 scale-50" />
                        </div>

                        {/* Service name */}
                        <span className="font-rajdhani text-sm sm:text-lg md:text-xl tracking-wide sm:tracking-wider text-white/80 group-hover:text-white transition-colors">
                            {service}
                        </span>

                        {/* Line extension on hover - hidden on mobile */}
                        <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-apex-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                ))}
            </div>

            {/* HUD decoration - smaller on mobile */}
            <div className="mt-4 sm:mt-8 flex items-center gap-2">
                <div className="w-10 sm:w-16 h-px bg-apex-gold/30" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-apex-gold/50 rotate-45" />
            </div>
        </div>
    );
}

// ========================================
// PERFORMANCE PHASE
// ========================================

function PerformancePhase() {
    const content = hudPhases.performance.content;

    return (
        <div className="max-w-xs sm:max-w-sm md:max-w-md text-right px-2 sm:px-0">
            {/* Phase indicator */}
            <div className="flex items-center justify-end gap-2 sm:gap-3 mb-3 sm:mb-6">
                <span className="font-rajdhani text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-apex-gold uppercase">
                    Engineered Power
                </span>
                <div className="w-5 sm:w-8 h-px bg-apex-gold" />
            </div>

            {/* Title */}
            <h2 className="font-orbitron font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider text-white mb-4 sm:mb-8">
                {content.title}
                <span className="block w-10 sm:w-16 h-0.5 bg-apex-red mt-2 sm:mt-3 ml-auto" />
            </h2>

            {/* Performance Specs */}
            <div className="space-y-3 sm:space-y-5">
                {content.items.map((item, index) => (
                    <motion.div
                        key={typeof item === 'string' ? item : item.label}
                        className="group"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 }}
                    >
                        <div className="flex items-center justify-end gap-3 sm:gap-6">
                            {/* Label */}
                            <div className="flex-1 text-right">
                                <span className="font-rajdhani text-xs sm:text-sm tracking-wide sm:tracking-wider text-white/50 uppercase">
                                    {typeof item === 'string' ? item : item.label}
                                </span>
                            </div>

                            {/* Value box */}
                            <div className="relative px-2 py-1.5 sm:px-4 sm:py-2 bg-carbon-gray/50 border border-apex-gold/20 group-hover:border-apex-gold/50 transition-colors">
                                <span className="font-orbitron text-xs sm:text-sm tracking-wider text-apex-gold">
                                    {typeof item === 'string' ? '●' : item.value}
                                </span>

                                {/* Corner accents */}
                                <span className="absolute -top-px -right-px w-1.5 h-1.5 sm:w-2 sm:h-2 border-t border-r border-apex-red" />
                                <span className="absolute -bottom-px -left-px w-1.5 h-1.5 sm:w-2 sm:h-2 border-b border-l border-apex-red" />
                            </div>
                        </div>

                        {/* Connection line */}
                        <div className="mt-1.5 sm:mt-2 h-px bg-gradient-to-l from-apex-gold/30 to-transparent" />
                    </motion.div>
                ))}
            </div>

            {/* Call to action */}
            <motion.div
                className="mt-6 sm:mt-10 pointer-events-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <button className="group inline-flex items-center gap-2 sm:gap-3 font-orbitron text-xs sm:text-sm tracking-wider text-apex-red hover:text-white active:text-white/80 transition-colors touch-manipulation">
                    <span>EXPLORE UPGRADES</span>
                    <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
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
                </button>
            </motion.div>
        </div>
    );
}

// ========================================
// SCROLL INDICATOR
// ========================================

function ScrollIndicator({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>;
}) {
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

    return (
        <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{ opacity }}
        >
            <span className="font-rajdhani text-xs tracking-[0.3em] text-white/50 uppercase">
                Scroll to Explore
            </span>
            <motion.div
                className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1"
                animate={{ borderColor: ["rgba(255,255,255,0.3)", "rgba(212,175,55,0.5)", "rgba(255,255,255,0.3)"] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <motion.div
                    className="w-1 h-2 bg-apex-gold rounded-full"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            </motion.div>
        </motion.div>
    );
}
