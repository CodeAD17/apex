"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { testimonialsData, statsData } from "@/data/apexData";
import { cn } from "@/lib/utils";

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="testimonials"
            ref={ref}
            className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20"
        >
            {/* Background accents - subtle on mobile */}
            <div className="absolute top-0 left-0 w-1/4 sm:w-1/3 h-full bg-gradient-to-r from-apex-red/5 to-transparent" />
            <div className="absolute top-0 right-0 w-1/4 sm:w-1/3 h-full bg-gradient-to-l from-apex-gold/5 to-transparent" />

            <div className="relative max-w-7xl mx-auto">
                {/* Stats Section */}
                <motion.div
                    className="mb-12 sm:mb-16 md:mb-20 lg:mb-28"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-4">
                        {statsData.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="relative inline-block">
                                    <span className="font-orbitron font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white">
                                        {stat.value}
                                    </span>
                                    <span className="absolute -right-1 sm:-right-2 -top-1 sm:-top-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-apex-red" />
                                </div>
                                <p className="mt-1 sm:mt-2 font-rajdhani text-xs sm:text-sm md:text-base tracking-wider text-white/50 uppercase">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Section Header */}
                <motion.div
                    className="text-center mb-10 sm:mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                        <div className="w-8 sm:w-12 h-px bg-apex-red" />
                        <span className="font-rajdhani text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-apex-red uppercase">
                            Client Reviews
                        </span>
                        <div className="w-8 sm:w-12 h-px bg-apex-red" />
                    </div>

                    <h2 className="font-orbitron font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wider text-white">
                        WHAT DRIVERS{" "}
                        <span className="text-apex-gold">SAY</span>
                    </h2>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ========================================
// TESTIMONIAL CARD
// ========================================

interface TestimonialCardProps {
    testimonial: (typeof testimonialsData)[0];
    index: number;
    isInView: boolean;
}

function TestimonialCard({ testimonial, index, isInView }: TestimonialCardProps) {
    return (
        <motion.div
            className={cn(
                "relative p-5 sm:p-6 md:p-8 bg-carbon-gray/40 border border-white/5",
                "hover:border-apex-gold/20 transition-all duration-500"
            )}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
        >
            {/* Quote mark */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-4xl sm:text-5xl md:text-6xl font-serif text-apex-gold/10">
                &ldquo;
            </div>

            {/* Rating stars */}
            <div className="flex gap-0.5 sm:gap-1 mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.svg
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-apex-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 + i * 0.05 }}
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                ))}
            </div>

            {/* Quote */}
            <p className="font-rajdhani text-sm sm:text-base md:text-lg text-white/80 leading-relaxed mb-5 sm:mb-6 md:mb-8 italic">
                &ldquo;{testimonial.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/10">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-apex-red to-apex-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-orbitron font-bold text-sm sm:text-lg text-white">
                        {testimonial.name.charAt(0)}
                    </span>
                </div>

                <div className="min-w-0">
                    <h4 className="font-orbitron font-semibold text-sm sm:text-base text-white truncate">
                        {testimonial.name}
                    </h4>
                    <p className="font-rajdhani text-xs sm:text-sm text-apex-gold/80 truncate">
                        {testimonial.car}
                    </p>
                </div>
            </div>

            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-l-2 border-apex-red/50" />
            <span className="absolute bottom-0 right-0 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-r-2 border-apex-gold/50" />
        </motion.div>
    );
}
