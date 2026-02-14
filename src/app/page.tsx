"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";

// Components
import Navbar from "@/components/Navbar";
import ApexScrollCanvas from "@/components/ApexScrollCanvas";
import ApexExperience from "@/components/ApexExperience";
import ServicesGrid from "@/components/ServicesGrid";
import BuildGallery from "@/components/BuildGallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  // Container ref for scroll tracking
  const scrollContainerRef = useRef<HTMLElement>(null);

  // Master scroll hook - attached to the 600vh container
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="bg-apex-black min-h-screen">
      {/* Fixed Navigation */}
      <Navbar />

      {/* =========================================
          SCROLL EXPERIENCE SECTION
          600vh tall container with sticky viewport
          ========================================= */}
      <section
        ref={scrollContainerRef}
        className="relative h-[600vh]"
        id="experience"
      >
        {/* Sticky viewport - stays fixed while scrolling through 600vh */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Background Canvas - Scroll-driven image sequence */}
          <ApexScrollCanvas
            scrollYProgress={scrollYProgress}
            totalFrames={192}
            imageFolderPath="/images"
            className="z-0"
          />

          {/* HUD Overlay - Text transitions based on scroll */}
          <ApexExperience
            scrollYProgress={scrollYProgress}
            className="z-10"
          />
        </div>
      </section>

      {/* =========================================
          POST-EXPERIENCE CONTENT
          Regular scrolling sections after the experience
          ========================================= */}
      <div className="relative z-20 bg-apex-black">
        {/* Transition gradient from experience */}
        <div className="absolute -top-32 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-apex-black pointer-events-none" />

        {/* Services Section */}
        <ServicesGrid />

        {/* Build Gallery */}
        <BuildGallery />

        {/* Testimonials & Stats */}
        <Testimonials />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
