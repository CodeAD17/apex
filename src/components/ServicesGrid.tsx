"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { servicesData } from "@/data/apexData";
import { cn } from "@/lib/utils";

export default function ServicesGrid() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="services"
            ref={ref}
            className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20"
        >
            {/* Background decoration - hidden on mobile */}
            <div className="absolute inset-0 overflow-hidden hidden sm:block">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-apex-gold/10 to-transparent" />
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-apex-gold/10 to-transparent" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                        <div className="w-8 sm:w-12 h-px bg-apex-red" />
                        <span className="font-rajdhani text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-apex-gold uppercase">
                            Our Services
                        </span>
                        <div className="w-8 sm:w-12 h-px bg-apex-red" />
                    </div>

                    <h2 className="font-orbitron font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wider text-white">
                        PRECISION{" "}
                        <span className="text-apex-red">DETAILING</span>
                    </h2>

                    <p className="mt-4 sm:mt-6 max-w-2xl mx-auto font-rajdhani text-sm sm:text-base md:text-lg text-white/60 px-2">
                        From paint protection to complete transformations, we deliver
                        automotive excellence at every level.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="mt-10 sm:mt-14 md:mt-16 text-center"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                >
                    <button className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-transparent border border-apex-gold/30 hover:border-apex-gold active:border-apex-gold/80 transition-all duration-300 touch-manipulation">
                        <span className="font-orbitron text-xs sm:text-sm tracking-wider text-white">
                            VIEW ALL SERVICES
                        </span>
                        <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 text-apex-gold group-hover:translate-x-1 transition-transform"
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

                        {/* Corner accents */}
                        <span className="absolute -top-px -left-px w-2 h-2 sm:w-3 sm:h-3 border-t border-l border-apex-gold" />
                        <span className="absolute -top-px -right-px w-2 h-2 sm:w-3 sm:h-3 border-t border-r border-apex-gold" />
                        <span className="absolute -bottom-px -left-px w-2 h-2 sm:w-3 sm:h-3 border-b border-l border-apex-gold" />
                        <span className="absolute -bottom-px -right-px w-2 h-2 sm:w-3 sm:h-3 border-b border-r border-apex-gold" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

// ========================================
// SERVICE CARD
// ========================================

interface ServiceCardProps {
    service: (typeof servicesData)[0];
    index: number;
    isInView: boolean;
}

function ServiceCard({ service, index, isInView }: ServiceCardProps) {
    return (
        <motion.div
            className={cn(
                "group relative p-4 sm:p-6 md:p-8",
                "bg-carbon-gray/30 border border-white/5",
                "hover:bg-carbon-gray/50 hover:border-apex-gold/20",
                "active:bg-carbon-gray/40",
                "transition-all duration-500",
                "touch-manipulation"
            )}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
        >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px">
                <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-apex-red via-apex-gold to-apex-red transition-all duration-700" />
            </div>

            {/* Icon container */}
            <div className="relative mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center bg-carbon-gray border border-apex-gold/20 group-hover:border-apex-gold/50 transition-colors">
                    <span className="text-xl sm:text-2xl">{service.icon}</span>
                </div>
                {/* Corner decoration */}
                <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 border-t border-r border-apex-red opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Content */}
            <h3 className="font-orbitron font-semibold text-base sm:text-lg md:text-xl tracking-wider text-white mb-2 sm:mb-3 group-hover:text-apex-gold transition-colors">
                {service.title}
            </h3>

            <p className="font-rajdhani text-sm sm:text-base text-white/60 leading-relaxed mb-4 sm:mb-6">
                {service.description}
            </p>

            {/* Price tag */}
            {service.price && (
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/10">
                    <span className="font-rajdhani text-xs sm:text-sm text-white/40 uppercase tracking-wider">
                        Starting
                    </span>
                    <span className="font-orbitron text-xs sm:text-sm text-apex-gold">
                        {service.price}
                    </span>
                </div>
            )}

            {/* Hover indicator - hidden on mobile */}
            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-apex-red"
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
            </div>

            {/* Corner brackets */}
            <span className="absolute bottom-0 left-0 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 border-b border-l border-apex-gold/20 group-hover:border-apex-gold/50 transition-colors" />
            <span className="absolute bottom-0 right-0 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 border-b border-r border-apex-gold/20 group-hover:border-apex-gold/50 transition-colors" />
        </motion.div>
    );
}
