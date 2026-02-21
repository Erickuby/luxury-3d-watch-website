"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TryOnCTA() {
    return (
        <section
            id="tryon"
            className="relative py-32 sm:py-40 lg:py-48 px-6 sm:px-12 lg:px-20 overflow-hidden"
        >
            {/* Background — subtle radial glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(0,229,255,0.03) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 max-w-[1400px] mx-auto">
                {/* Two-column layout */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-16 sm:gap-20 lg:gap-16">
                    {/* Left — headline + CTA */}
                    <div className="flex-1 max-w-2xl">
                        <motion.p
                            className="font-mono text-xs sm:text-sm tracking-[0.35em] uppercase mb-6"
                            style={{ color: "#00E5FF" }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Virtual Try-On
                        </motion.p>

                        <motion.h2
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-gradient-heading mb-8 sm:mb-10"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.1 }}
                        >
                            See it on
                            <br />
                            your wrist.
                        </motion.h2>

                        <motion.p
                            className="text-base sm:text-lg font-light leading-relaxed max-w-lg mb-12 sm:mb-14"
                            style={{ color: "rgba(255,255,255,0.45)" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Our AR experience uses depth-sensing AI to map your exact
                            wrist geometry — showing you the perfect fit in real-time,
                            from any angle. No store visit needed.
                        </motion.p>

                        {/* CTA Buttons — scroll to collection */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-start gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {/* Primary — white pill, black text */}
                            <motion.a
                                href="#collection"
                                className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full text-sm sm:text-base font-medium tracking-wide cursor-pointer"
                                style={{
                                    background: "#ffffff",
                                    color: "#000000",
                                }}
                                whileHover={{
                                    boxShadow: "0 0 40px rgba(255,255,255,0.2)",
                                    scale: 1.02,
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Explore Collection
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </motion.a>

                            {/* Secondary — frosted glass */}
                            <motion.a
                                href="#technology"
                                className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full text-sm sm:text-base font-light tracking-wide cursor-pointer"
                                style={{
                                    background: "rgba(255,255,255,0.04)",
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    color: "rgba(255,255,255,0.6)",
                                }}
                                whileHover={{
                                    borderColor: "rgba(0,229,255,0.3)",
                                    color: "#00E5FF",
                                    boxShadow: "0 0 30px rgba(0,229,255,0.08)",
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Learn More
                            </motion.a>
                        </motion.div>

                        {/* Platform badges */}
                        <motion.div
                            className="mt-14 sm:mt-16 flex items-center gap-6 sm:gap-10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <span
                                className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] uppercase"
                                style={{ color: "rgba(255,255,255,0.2)" }}
                            >
                                Available on
                            </span>
                            <div className="w-px h-3" style={{ background: "rgba(255,255,255,0.08)" }} />
                            {["Apple Vision Pro", "Android XR", "Meta Quest 4"].map((p) => (
                                <span
                                    key={p}
                                    className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] uppercase"
                                    style={{ color: "rgba(255,255,255,0.15)" }}
                                >
                                    {p}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right — AR visualization card with image */}
                    <motion.div
                        className="flex-1 flex items-center justify-center lg:justify-end"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="relative w-full max-w-[480px] aspect-square rounded-3xl overflow-hidden group">
                            {/* Background image — person trying on watch */}
                            <Image
                                src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&h=800&fit=crop&q=80"
                                alt="Watch AR try-on experience"
                                fill
                                className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-700"
                                sizes="(max-width: 1024px) 100vw, 480px"
                                unoptimized
                            />
                            {/* Dark overlay */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: "radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
                                }}
                            />

                            {/* AR scanning overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Concentric rings */}
                                <motion.div
                                    className="absolute w-[70%] h-[70%] rounded-full"
                                    style={{ border: "1px solid rgba(0,229,255,0.12)" }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.div
                                    className="absolute w-[50%] h-[50%] rounded-full"
                                    style={{ border: "1px solid rgba(0,229,255,0.08)" }}
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.div
                                    className="absolute w-[30%] h-[30%] rounded-full"
                                    style={{ border: "1px solid rgba(0,229,255,0.06)" }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                />

                                {/* Center pulse */}
                                <motion.div
                                    className="w-3 h-3 rounded-full z-10"
                                    style={{ background: "#00E5FF" }}
                                    animate={{
                                        boxShadow: [
                                            "0 0 0 0 rgba(0,229,255,0.4)",
                                            "0 0 20px 10px rgba(0,229,255,0.1)",
                                            "0 0 0 0 rgba(0,229,255,0.4)",
                                        ],
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />
                            </div>

                            {/* Corner markers */}
                            <div className="absolute top-4 left-4 w-6 h-6">
                                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                    <path d="M0 8V0h8" stroke="#00E5FF" strokeWidth="1" opacity="0.4" />
                                </svg>
                            </div>
                            <div className="absolute top-4 right-4 w-6 h-6">
                                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                    <path d="M16 0h8v8" stroke="#00E5FF" strokeWidth="1" opacity="0.4" />
                                </svg>
                            </div>
                            <div className="absolute bottom-4 left-4 w-6 h-6">
                                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                    <path d="M0 16v8h8" stroke="#00E5FF" strokeWidth="1" opacity="0.4" />
                                </svg>
                            </div>
                            <div className="absolute bottom-4 right-4 w-6 h-6">
                                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                    <path d="M16 24h8v-8" stroke="#00E5FF" strokeWidth="1" opacity="0.4" />
                                </svg>
                            </div>

                            {/* Scan lines */}
                            <motion.div
                                className="absolute left-[15%] right-[15%] h-px"
                                style={{ background: "rgba(0,229,255,0.2)", top: "35%" }}
                                animate={{ opacity: [0, 0.6, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute left-[20%] right-[20%] h-px"
                                style={{ background: "rgba(0,229,255,0.15)", top: "65%" }}
                                animate={{ opacity: [0, 0.5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                            />

                            {/* Label */}
                            <div className="absolute bottom-6 left-6 z-10">
                                <p
                                    className="font-mono text-[9px] tracking-[0.2em] uppercase"
                                    style={{ color: "rgba(0,229,255,0.5)" }}
                                >
                                    AR Scanning Active
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
