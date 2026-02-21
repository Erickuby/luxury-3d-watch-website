"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FeatureGrid() {
    return (
        <section id="features" className="relative py-32 sm:py-40 lg:py-48 px-6 sm:px-12 lg:px-20">
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
                        Capabilities
                    </motion.p>
                    <motion.h2
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-gradient-heading max-w-4xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1 }}
                    >
                        Engineered for the
                        <br />
                        extraordinary.
                    </motion.h2>
                </div>

                {/* Bento Grid — 2 rows */}
                {/* Row 1: 2 cards side by side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                    {/* AR Try-On card */}
                    <motion.div
                        className="bento-card relative min-h-[360px] sm:min-h-[420px] flex flex-col justify-end p-8 sm:p-10 lg:p-12 group overflow-hidden"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Background image — AR/VR visualization */}
                        <Image
                            src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=600&fit=crop&q=80"
                            alt="Smartwatch on wrist AR try-on"
                            fill
                            className="object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-700"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            unoptimized
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 65%, rgba(0,0,0,0.95) 100%)",
                            }}
                        />

                        <div className="relative z-10">
                            <p
                                className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-3"
                                style={{ color: "#00E5FF" }}
                            >
                                AR Try-On
                            </p>
                            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3 text-gradient-heading">
                                See it on your wrist
                                <br />
                                before you commit.
                            </h3>
                            <p
                                className="text-sm font-light leading-relaxed max-w-sm"
                                style={{ color: "rgba(255,255,255,0.4)" }}
                            >
                                Depth-sensing AI maps your exact wrist geometry for a
                                flawless virtual fit — from any angle.
                            </p>
                        </div>
                    </motion.div>

                    {/* Bespoke card */}
                    <motion.div
                        className="bento-card relative min-h-[360px] sm:min-h-[420px] flex flex-col justify-end p-8 sm:p-10 lg:p-12 group overflow-hidden"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.12 }}
                    >
                        {/* Background image — luxury materials/craftsmanship */}
                        <Image
                            src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&h=600&fit=crop&q=80"
                            alt="Luxury watch craftsmanship"
                            fill
                            className="object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-700"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            unoptimized
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 65%, rgba(0,0,0,0.95) 100%)",
                            }}
                        />

                        <div className="relative z-10">
                            <p
                                className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-3"
                                style={{ color: "#FFD700" }}
                            >
                                Bespoke Customization
                            </p>
                            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3 text-gradient-heading">
                                12,000+ material
                                <br />
                                combinations.
                            </h3>
                            <p
                                className="text-sm font-light leading-relaxed max-w-sm"
                                style={{ color: "rgba(255,255,255,0.4)" }}
                            >
                                Every watch is uniquely yours. Choose finishes, straps,
                                and dials — crafted to your exact specification.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Row 2: Full-width Predictive card */}
                <motion.div
                    className="bento-card relative min-h-[320px] sm:min-h-[380px] flex flex-col justify-end p-8 sm:p-10 lg:p-12 group overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                >
                    {/* Background image — health/biometric data */}
                    <Image
                        src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=600&fit=crop&q=80"
                        alt="Health data visualization"
                        fill
                        className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                        sizes="100vw"
                        unoptimized
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.95) 100%)",
                        }}
                    />

                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div>
                            <p
                                className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-3"
                                style={{ color: "#00E5FF" }}
                            >
                                Predictive Health Tracking
                            </p>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3 text-gradient-heading">
                                AI anticipates your health needs.
                                <br className="hidden sm:block" />
                                72 hours before you feel them.
                            </h3>
                        </div>
                        <p
                            className="text-sm font-light leading-relaxed max-w-md lg:text-right"
                            style={{ color: "rgba(255,255,255,0.4)" }}
                        >
                            Heart rate, sleep patterns, stress levels, blood oxygen —
                            all predicted with clinical-grade accuracy. Your body&apos;s
                            early warning system.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
