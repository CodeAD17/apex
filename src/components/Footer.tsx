"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { footerLinks, contactData } from "@/data/apexData";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-carbon-gray/50 border-t border-white/5">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-apex-gold/50 to-transparent" />

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-8">
                    {/* Brand Column */}
                    <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1">
                        <motion.div
                            className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
                                <Image
                                    src="/logo.jpg"
                                    alt="APEX Auto Detailing"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="font-orbitron font-bold text-base sm:text-lg md:text-xl tracking-wider text-white">
                                    APEX
                                </h3>
                                <p className="text-[8px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] text-apex-gold/80 uppercase">
                                    Auto Detailing Studio
                                </p>
                            </div>
                        </motion.div>

                        <p className="font-rajdhani text-sm sm:text-base text-white/60 leading-relaxed mb-4 sm:mb-6">
                            Premium automotive care, custom modifications, and performance
                            upgrades. Where precision meets performance.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3 sm:gap-4">
                            {["instagram", "youtube", "facebook"].map((social) => (
                                <motion.a
                                    key={social}
                                    href={`#${social}`}
                                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-carbon-gray border border-white/10 hover:border-apex-gold/50 active:border-apex-gold hover:bg-carbon-gray/80 transition-all duration-300 touch-manipulation"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <SocialIcon name={social} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="col-span-1">
                        <h4 className="font-orbitron font-semibold text-xs sm:text-sm tracking-wider text-white mb-3 sm:mb-4 md:mb-6 uppercase">
                            Services
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="font-rajdhani text-sm sm:text-base text-white/60 hover:text-apex-gold active:text-apex-gold/80 transition-colors duration-300 flex items-center gap-1.5 sm:gap-2 group touch-manipulation"
                                    >
                                        <span className="w-1 h-1 bg-apex-red group-hover:bg-apex-gold transition-colors" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Performance Column */}
                    <div className="col-span-1">
                        <h4 className="font-orbitron font-semibold text-xs sm:text-sm tracking-wider text-white mb-3 sm:mb-4 md:mb-6 uppercase">
                            Performance
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {footerLinks.performance.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="font-rajdhani text-sm sm:text-base text-white/60 hover:text-apex-gold active:text-apex-gold/80 transition-colors duration-300 flex items-center gap-1.5 sm:gap-2 group touch-manipulation"
                                    >
                                        <span className="w-1 h-1 bg-apex-red group-hover:bg-apex-gold transition-colors" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1">
                        <h4 className="font-orbitron font-semibold text-xs sm:text-sm tracking-wider text-white mb-3 sm:mb-4 md:mb-6 uppercase">
                            Contact
                        </h4>
                        <ul className="space-y-3 sm:space-y-4">
                            <li className="flex items-start gap-2 sm:gap-3">
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5 text-apex-gold flex-shrink-0 mt-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span className="font-rajdhani text-sm sm:text-base text-white/60">
                                    {contactData.address}
                                </span>
                            </li>
                            <li className="flex items-center gap-2 sm:gap-3">
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5 text-apex-gold flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <a
                                    href={`tel:${contactData.phone}`}
                                    className="font-rajdhani text-sm sm:text-base text-white/60 hover:text-apex-gold active:text-apex-gold/80 transition-colors touch-manipulation"
                                >
                                    {contactData.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-2 sm:gap-3">
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5 text-apex-gold flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <a
                                    href={`mailto:${contactData.email}`}
                                    className="font-rajdhani text-sm sm:text-base text-white/60 hover:text-apex-gold active:text-apex-gold/80 transition-colors touch-manipulation break-all"
                                >
                                    {contactData.email}
                                </a>
                            </li>
                            <li className="flex items-center gap-2 sm:gap-3">
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5 text-apex-gold flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span className="font-rajdhani text-sm sm:text-base text-white/60">
                                    {contactData.hours}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                    <p className="font-rajdhani text-xs sm:text-sm text-white/40 text-center sm:text-left">
                        © {currentYear} APEX Auto Detailing Studio. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4 sm:gap-6">
                        <a
                            href="#privacy"
                            className="font-rajdhani text-xs sm:text-sm text-white/40 hover:text-white active:text-white/80 transition-colors touch-manipulation"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#terms"
                            className="font-rajdhani text-xs sm:text-sm text-white/40 hover:text-white active:text-white/80 transition-colors touch-manipulation"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>

            {/* Decorative corner - hidden on mobile */}
            <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 overflow-hidden opacity-20 hidden sm:block">
                <div className="absolute bottom-4 right-4 w-20 h-20 sm:w-24 sm:h-24 border border-apex-gold/50 rotate-45" />
            </div>
        </footer>
    );
}

// ========================================
// SOCIAL ICON COMPONENT
// ========================================

function SocialIcon({ name }: { name: string }) {
    switch (name) {
        case "instagram":
            return (
                <svg className="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            );
        case "youtube":
            return (
                <svg className="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            );
        case "facebook":
            return (
                <svg className="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            );
        default:
            return null;
    }
}
