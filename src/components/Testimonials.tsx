"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
    quote: string;
    name: string;
    title: string;
    accent: string;
}

const testimonials: Testimonial[] = [
    {
        quote:
            "The level of craftsmanship is unreal. It feels like wearing the future on your wrist.",
        name: "James Chen",
        title: "Editor-in-Chief, Hodinkee",
        accent: "#00E5FF",
    },
    {
        quote:
            "Chrono AI doesn't just tell time — it anticipates your life. The health predictions alone changed how I train.",
        name: "Serena Watts",
        title: "Olympic Triathlete",
        accent: "#FFD700",
    },
    {
        quote:
            "The AR try-on is the most impressive shopping experience I've ever had. I ordered mine within 30 seconds.",
        name: "Michael Torres",
        title: "Senior Editor, Wired",
        accent: "#A78BFA",
    },
];

const AUTOPLAY_MS = 5000;

const slideVariants = {
    enter: (dir: number) => ({
        x: dir > 0 ? 300 : -300,
        opacity: 0,
        scale: 0.96,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
    },
    exit: (dir: number) => ({
        x: dir > 0 ? -300 : 300,
        opacity: 0,
        scale: 0.96,
    }),
};

export default function Testimonials() {
    const [[current, direction], setCurrent] = useState([0, 1]);

    const paginate = useCallback(
        (dir: number) => {
            setCurrent(([prev]) => {
                const next = (prev + dir + testimonials.length) % testimonials.length;
                return [next, dir];
            });
        },
        []
    );

    // Autoplay
    useEffect(() => {
        const timer = setInterval(() => paginate(1), AUTOPLAY_MS);
        return () => clearInterval(timer);
    }, [paginate]);

    const t = testimonials[current];

    return (
        <section className="relative py-32 sm:py-40 lg:py-48 px-6 sm:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                {/* Section header */}
                <div className="mb-20 sm:mb-28 lg:mb-32">
                    <motion.p
                        className="font-mono text-xs sm:text-sm tracking-[0.35em] uppercase mb-6"
                        style={{ color: "#00E5FF" }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Voices
                    </motion.p>
                    <motion.h2
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-gradient-heading"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1 }}
                    >
                        What the world
                        <br />
                        is saying.
                    </motion.h2>
                </div>

                {/* Carousel area */}
                <div className="relative min-h-[320px] sm:min-h-[300px]">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                            className="max-w-3xl mx-auto text-center"
                        >
                            {/* Large quote mark */}
                            <div
                                className="font-serif text-6xl sm:text-7xl lg:text-8xl leading-none mb-8 select-none"
                                style={{ color: t.accent, opacity: 0.2 }}
                            >
                                &ldquo;
                            </div>

                            {/* Quote text */}
                            <p
                                className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug tracking-tight mb-10 sm:mb-12"
                                style={{ color: "rgba(255,255,255,0.8)" }}
                            >
                                {t.quote}
                            </p>

                            {/* Attribution */}
                            <div>
                                <p className="text-base sm:text-lg font-medium text-white mb-1">
                                    {t.name}
                                </p>
                                <p
                                    className="font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase"
                                    style={{ color: "rgba(255,255,255,0.3)" }}
                                >
                                    {t.title}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation dots + arrows */}
                <div className="flex items-center justify-center gap-8 mt-14 sm:mt-16">
                    {/* Prev arrow */}
                    <button
                        onClick={() => paginate(-1)}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                        style={{
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "rgba(255,255,255,0.4)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                            e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                            e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                        }}
                        aria-label="Previous testimonial"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className="flex gap-3">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent([i, i > current ? 1 : -1])}
                                className="relative w-2 h-2 rounded-full transition-all duration-500"
                                style={{
                                    background:
                                        i === current
                                            ? testimonials[current].accent
                                            : "rgba(255,255,255,0.15)",
                                    boxShadow:
                                        i === current
                                            ? `0 0 8px ${testimonials[current].accent}40`
                                            : "none",
                                    transform: i === current ? "scale(1.3)" : "scale(1)",
                                }}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>

                    {/* Next arrow */}
                    <button
                        onClick={() => paginate(1)}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                        style={{
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "rgba(255,255,255,0.4)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                            e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                            e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                        }}
                        aria-label="Next testimonial"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
