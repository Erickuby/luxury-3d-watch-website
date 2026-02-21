"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="hero" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Subtle radial gradient background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,229,255,0.04) 0%, transparent 70%)",
                }}
            />

            {/* Main headline */}
            <div className="relative z-10 text-center px-4">
                <motion.h1
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tight leading-none"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    Time. <span className="font-thin" style={{ color: "rgba(255,255,255,0.6)" }}>Redefined.</span>
                </motion.h1>

                {/* Shimmer line */}
                <motion.div
                    className="shimmer-line mx-auto mt-6 sm:mt-8 w-32 sm:w-48"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                />

                <motion.p
                    className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-md mx-auto"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    Experience the AI-powered virtual try-on.
                </motion.p>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span
                    className="text-[10px] tracking-[0.4em] uppercase"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                >
                    Scroll to explore
                </span>
                <motion.div
                    className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
                    style={{
                        borderColor: "rgba(255,255,255,0.2)",
                        animation: "pulseGlow 2.5s ease-in-out infinite",
                    }}
                >
                    <motion.div
                        className="w-1 h-2 rounded-full"
                        style={{ background: "#00E5FF" }}
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
