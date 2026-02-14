"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const { scrollY } = useScroll();

    // Navbar becomes opaque after scrolling 100px
    const navBackground = useTransform(
        scrollY,
        [0, 100],
        ["rgba(11, 11, 11, 0)", "rgba(11, 11, 11, 0.9)"]
    );

    const navBlur = useTransform(
        scrollY,
        [0, 100],
        ["blur(0px)", "blur(20px)"]
    );

    const borderOpacity = useTransform(
        scrollY,
        [0, 100],
        [0, 0.2]
    );

    return (
        <motion.nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50",
                "flex items-center justify-between",
                "px-3 sm:px-6 md:px-12 py-2 sm:py-3 md:py-4"
            )}
            style={{
                backgroundColor: navBackground,
                backdropFilter: navBlur,
                WebkitBackdropFilter: navBlur,
            }}
        >
            {/* Gradient Border Bottom */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{
                    background: `linear-gradient(90deg, transparent, rgba(212, 175, 55, ${borderOpacity}), transparent)`,
                }}
            />

            {/* Logo */}
            <motion.a
                href="#"
                className="flex items-center gap-2 sm:gap-3 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <div className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14">
                    <Image
                        src="/logo.jpg"
                        alt="APEX Auto Detailing"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <div className="hidden sm:block">
                    <h1 className="font-orbitron font-bold text-base sm:text-lg md:text-xl tracking-wider text-white">
                        APEX
                    </h1>
                    <p className="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] text-apex-gold/80 uppercase">
                        Auto Detailing Studio
                    </p>
                </div>
            </motion.a>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center gap-8">
                {["Services", "Performance", "Gallery", "Contact"].map((item) => (
                    <motion.a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className={cn(
                            "font-rajdhani text-sm tracking-wider uppercase",
                            "text-white/70 hover:text-white",
                            "transition-colors duration-300",
                            "relative group"
                        )}
                        whileHover={{ y: -2 }}
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-apex-red group-hover:w-full transition-all duration-300" />
                    </motion.a>
                ))}
            </div>

            {/* CTA Button - Mobile optimized */}
            <motion.button
                className={cn(
                    "relative overflow-hidden",
                    "px-3 py-2 sm:px-5 sm:py-2.5 md:px-8 md:py-3",
                    "font-orbitron text-[10px] sm:text-xs md:text-sm tracking-wider",
                    "bg-apex-red text-white",
                    "border border-apex-red",
                    "transition-all duration-300",
                    "hover:bg-transparent hover:text-apex-red",
                    "active:bg-apex-red/80",
                    "touch-manipulation",
                    "group"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <span className="relative z-10">BOOK NOW</span>

                {/* Animated shine effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                />

                {/* Corner accents - smaller on mobile */}
                <span className="absolute top-0 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-t border-l border-apex-gold" />
                <span className="absolute top-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-t border-r border-apex-gold" />
                <span className="absolute bottom-0 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-b border-l border-apex-gold" />
                <span className="absolute bottom-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-b border-r border-apex-gold" />
            </motion.button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden flex flex-col gap-1 sm:gap-1.5 p-2 touch-manipulation" aria-label="Menu">
                <span className="w-5 sm:w-6 h-0.5 bg-white" />
                <span className="w-3 sm:w-4 h-0.5 bg-apex-gold" />
                <span className="w-5 sm:w-6 h-0.5 bg-white" />
            </button>
        </motion.nav>
    );
}
