"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollCanvas from "@/components/ScrollCanvas";
import StoryBeats from "@/components/StoryBeats";
import WatchCollection from "@/components/WatchCollection";
import Technology from "@/components/Technology";
import FeatureGrid from "@/components/FeatureGrid";
import Testimonials from "@/components/Testimonials";
import TryOnCTA from "@/components/TryOnCTA";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative bg-black min-h-screen">
      {/* Fixed navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Scroll-based watch disassembly animation */}
      <div
        ref={scrollContainerRef}
        className="relative"
        style={{ height: "350vh" }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollCanvas scrollContainerRef={scrollContainerRef} />
          <StoryBeats scrollContainerRef={scrollContainerRef} />
        </div>
      </div>

      {/* Watch collection */}
      <WatchCollection />

      {/* Technology section */}
      <Technology />

      {/* Feature grid */}
      <FeatureGrid />

      {/* Testimonials */}
      <Testimonials />

      {/* Try-On CTA */}
      <TryOnCTA />

      {/* Footer */}
      <footer className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20">
        {/* Top divider */}
        <div
          className="absolute top-0 left-6 right-6 sm:left-12 sm:right-12 lg:left-20 lg:right-20 h-px"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />

        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-8">
            {/* Left — logo + tagline */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-5 h-5 rounded-full border flex items-center justify-center"
                  style={{ borderColor: "rgba(0,229,255,0.25)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00E5FF" }} />
                </div>
                <span className="text-xs tracking-[0.3em] uppercase font-light">
                  Chrono <span style={{ color: "#00E5FF" }}>AI</span>
                </span>
              </div>
              <p
                className="text-xs font-light"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                Time. Redefined.
              </p>
            </div>

            {/* Center — links */}
            <div className="flex flex-wrap gap-6 sm:gap-8">
              {["Privacy", "Terms", "Press", "Careers", "Support"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 hover:text-[#00E5FF]"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Right — copyright */}
            <p
              className="font-mono text-[9px] tracking-[0.15em] uppercase lg:text-right"
              style={{ color: "rgba(255,255,255,0.12)" }}
            >
              © 2026 Chrono AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
