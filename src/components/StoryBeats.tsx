"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface BeatConfig {
    text: string;
    sub?: string;
    rangeIn: [number, number, number, number];
    position: "top-left" | "bottom-right" | "center";
}

const beats: BeatConfig[] = [
    {
        text: "Flawless Sapphire Crystal.",
        sub: "Ultra-durable. Perfectly transparent.",
        rangeIn: [0.18, 0.23, 0.30, 0.37],
        position: "top-left",
    },
    {
        text: "Powered by next-gen\nAI prediction chips.",
        sub: "60 billion transistors. One purpose.",
        rangeIn: [0.43, 0.48, 0.55, 0.62],
        position: "bottom-right",
    },
    {
        text: "Precision Engineering.\nIn every layer.",
        sub: "186 components. Zero compromise.",
        rangeIn: [0.72, 0.78, 0.85, 0.92],
        position: "center",
    },
];

function getPositionClasses(position: BeatConfig["position"]): string {
    switch (position) {
        case "top-left":
            return "top-[15%] left-[6%] sm:left-[8%] text-left";
        case "bottom-right":
            return "bottom-[15%] right-[6%] sm:right-[8%] text-right";
        case "center":
            return "top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center";
    }
}

export default function StoryBeats({
    scrollContainerRef,
}: {
    scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}) {
    const scrollProgress = useMotionValue(0);

    useEffect(() => {
        const handleScroll = () => {
            const container = scrollContainerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const scrollableHeight = container.offsetHeight - window.innerHeight;
            const scrolled = -rect.top;
            const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
            scrollProgress.set(progress);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollContainerRef, scrollProgress]);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {beats.map((beat, i) => (
                <StoryBeatText
                    key={i}
                    beat={beat}
                    scrollProgress={scrollProgress}
                />
            ))}
        </div>
    );
}

function StoryBeatText({
    beat,
    scrollProgress,
}: {
    beat: BeatConfig;
    scrollProgress: ReturnType<typeof useMotionValue<number>>;
}) {
    const opacity = useTransform(scrollProgress, beat.rangeIn, [0, 1, 1, 0]);
    const y = useTransform(scrollProgress, beat.rangeIn, [30, 0, 0, -20]);
    const scale = useTransform(scrollProgress, beat.rangeIn, [0.95, 1, 1, 0.98]);

    return (
        <motion.div
            className={`absolute max-w-md sm:max-w-lg px-4 ${getPositionClasses(beat.position)}`}
            style={{ opacity, y, scale }}
        >
            {/* Dark backdrop for text readability */}
            <div
                className="absolute -inset-6 sm:-inset-8 rounded-2xl -z-10"
                style={{
                    background: "radial-gradient(ellipse at center, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
                }}
            />

            <p
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight leading-[1.1] whitespace-pre-line"
                style={{
                    color: "#ffffff",
                    textShadow: "0 2px 20px rgba(0,0,0,0.8), 0 0px 40px rgba(0,0,0,0.5)",
                }}
            >
                {beat.text}
            </p>
            {beat.sub && (
                <p
                    className="mt-3 sm:mt-4 text-xs sm:text-sm tracking-[0.15em] uppercase font-light"
                    style={{
                        color: "rgba(0, 229, 255, 0.8)",
                        textShadow: "0 1px 10px rgba(0,0,0,0.9)",
                    }}
                >
                    {beat.sub}
                </p>
            )}

            {/* Decorative accent line */}
            <div
                className="mt-4 sm:mt-5 h-[1px] w-12 sm:w-16"
                style={{
                    background:
                        beat.position === "center"
                            ? "linear-gradient(90deg, transparent, #00E5FF, transparent)"
                            : beat.position === "top-left"
                                ? "linear-gradient(90deg, #00E5FF, transparent)"
                                : "linear-gradient(90deg, transparent, #00E5FF)",
                    marginLeft: beat.position === "center" ? "auto" : undefined,
                    marginRight: beat.position === "center" ? "auto" : undefined,
                }}
            />
        </motion.div>
    );
}
