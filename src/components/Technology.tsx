"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Technology() {
    return (
        <section id="technology" className="relative py-32 sm:py-40 lg:py-48 px-6 sm:px-12 lg:px-20">
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
                        Under the Surface
                    </motion.p>
                    <motion.h2
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-gradient-heading max-w-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1 }}
                    >
                        Technology that
                        <br />
                        thinks ahead.
                    </motion.h2>
                </div>

                {/* Bento Grid — 1 large + 2 small */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 mb-5">
                    {/* Large featured card — Neural Health Engine */}
                    <motion.div
                        className="bento-card lg:col-span-2 relative min-h-[400px] sm:min-h-[480px] lg:min-h-[520px] flex flex-col justify-end p-8 sm:p-10 lg:p-12 group"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Background image */}
                        <Image
                            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=800&fit=crop&q=80"
                            alt="Neural processor visualization"
                            fill
                            className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700"
                            sizes="(max-width: 1024px) 100vw, 66vw"
                            unoptimized
                        />
                        {/* Dark gradient overlay */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.95) 100%)",
                            }}
                        />

                        {/* Content — bottom left */}
                        <div className="relative z-10">
                            <p
                                className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-3"
                                style={{ color: "#00E5FF" }}
                            >
                                Neural Health Engine
                            </p>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3 text-gradient-heading">
                                60 billion transistors.
                                <br />
                                One purpose.
                            </h3>
                            <p
                                className="text-sm sm:text-base font-light leading-relaxed max-w-lg"
                                style={{ color: "rgba(255,255,255,0.45)" }}
                            >
                                A dedicated AI co-processor analyzes 1,200 biometric data points
                                per second — predicting health anomalies 72 hours before they occur.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right column — 2 stacked cards */}
                    <div className="flex flex-col gap-4 sm:gap-5">
                        {/* Card 2 — Quantum Security */}
                        <motion.div
                            className="bento-card relative flex-1 min-h-[240px] flex flex-col justify-end p-7 sm:p-8 group overflow-hidden"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                        >
                            {/* Background image */}
                            <Image
                                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80"
                                alt="Secure data encryption"
                                fill
                                className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                                sizes="(max-width: 1024px) 100vw, 33vw"
                                unoptimized
                            />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.95) 100%)",
                                }}
                            />

                            <div className="relative z-10">
                                <p
                                    className="font-mono text-[10px] tracking-[0.3em] uppercase mb-2"
                                    style={{ color: "#00E5FF" }}
                                >
                                    Quantum-Secure
                                </p>
                                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2 text-gradient-heading">
                                    Military-grade
                                    <br />
                                    encryption.
                                </h3>
                                <p
                                    className="text-xs font-light leading-relaxed"
                                    style={{ color: "rgba(255,255,255,0.35)" }}
                                >
                                    Quantum-resistant algorithms protect every transmission.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 3 — Haptic Array */}
                        <motion.div
                            className="bento-card relative flex-1 min-h-[240px] flex flex-col justify-end p-7 sm:p-8 group overflow-hidden"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {/* Background image */}
                            <Image
                                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop&q=80"
                                alt="Haptic technology visualization"
                                fill
                                className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                                sizes="(max-width: 1024px) 100vw, 33vw"
                                unoptimized
                            />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.95) 100%)",
                                }}
                            />

                            <div className="relative z-10">
                                <p
                                    className="font-mono text-[10px] tracking-[0.3em] uppercase mb-2"
                                    style={{ color: "#00E5FF" }}
                                >
                                    Haptic Feedback
                                </p>
                                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2 text-gradient-heading">
                                    256 micro-
                                    <br />
                                    actuators.
                                </h3>
                                <p
                                    className="text-xs font-light leading-relaxed"
                                    style={{ color: "rgba(255,255,255,0.35)" }}
                                >
                                    Spatial haptics you feel — precisely where it matters.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Stats row */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden"
                    style={{ background: "rgba(39, 39, 42, 0.4)" }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {[
                        { value: "186", label: "Components" },
                        { value: "60B", label: "Transistors" },
                        { value: "72h", label: "Predictive" },
                        { value: "0.01mm", label: "Precision" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="py-8 sm:py-10 text-center"
                            style={{ background: "#000000" }}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.6 }}
                        >
                            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-1 text-gradient-heading">
                                {stat.value}
                            </p>
                            <p
                                className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] uppercase"
                                style={{ color: "rgba(255,255,255,0.25)" }}
                            >
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
