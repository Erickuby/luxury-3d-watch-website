"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface WatchModel {
    name: string;
    tagline: string;
    price: string;
    material: string;
    image: string;
    accent: string;
}

const watches: WatchModel[] = [
    {
        name: "Chrono Noir",
        tagline: "Stealth meets substance. A watch that disappears into your life — and stands out in every room.",
        price: "From $2,499",
        material: "Grade 5 Titanium · 48mm",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=800&fit=crop&q=85",
        accent: "#00E5FF",
    },
    {
        name: "Chrono Lux",
        tagline: "For those who believe luxury should be felt, not flaunted. 18-karat gold, zero compromise.",
        price: "From $3,299",
        material: "18K Gold Bezel · 44mm",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=1200&h=800&fit=crop&q=85",
        accent: "#FFD700",
    },
    {
        name: "Chrono Sport",
        tagline: "Born from motorsport engineering. Built for the human body. Carbon-reinforced at every layer.",
        price: "From $1,899",
        material: "Forged Carbon · 46mm",
        image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=1200&h=800&fit=crop&q=85",
        accent: "#FF4D4D",
    },
    {
        name: "Chrono Aura",
        tagline: "Designed around calm. A ceramic body that reads your stress before you feel it.",
        price: "From $2,799",
        material: "High-Tech Ceramic · 42mm",
        image: "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=1200&h=800&fit=crop&q=85",
        accent: "#A78BFA",
    },
];

export default function WatchCollection() {
    return (
        <section id="collection" className="relative py-32 sm:py-40 lg:py-48">
            {/* Section label */}
            <div className="px-6 sm:px-12 lg:px-20 max-w-[1400px] mx-auto mb-24 sm:mb-32 lg:mb-40">
                <motion.p
                    className="font-mono text-xs sm:text-sm tracking-[0.35em] uppercase mb-6"
                    style={{ color: "#00E5FF" }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    The Collection
                </motion.p>
                <motion.h2
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-gradient-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.1 }}
                >
                    Choose your
                    <br />
                    expression.
                </motion.h2>
            </div>

            {/* Alternating editorial watch layouts */}
            <div className="space-y-32 sm:space-y-40 lg:space-y-48">
                {watches.map((watch, i) => {
                    const isReversed = i % 2 !== 0;

                    return (
                        <motion.div
                            key={watch.name}
                            className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 sm:gap-12 lg:gap-0`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1 }}
                        >
                            {/* Image — takes up ~65% of screen */}
                            <motion.div
                                className={`w-full lg:w-[60%] relative aspect-[3/2] overflow-hidden ${isReversed ? "lg:rounded-l-[32px]" : "lg:rounded-r-[32px]"}`}
                                initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, delay: 0.15 }}
                            >
                                <Image
                                    src={watch.image}
                                    alt={watch.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                    unoptimized
                                />
                                {/* Subtle dark overlay on edges */}
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: isReversed
                                            ? "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, transparent 30%, transparent 100%)"
                                            : "linear-gradient(270deg, rgba(0,0,0,0.4) 0%, transparent 30%, transparent 100%)",
                                    }}
                                />
                            </motion.div>

                            {/* Text — takes up ~35%, generous padding */}
                            <motion.div
                                className={`w-full lg:w-[40%] px-6 sm:px-12 lg:px-16 xl:px-20 py-8 sm:py-10 lg:py-0 ${isReversed ? "lg:text-right" : "lg:text-left"}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                {/* Material badge */}
                                <p
                                    className="font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-4 sm:mb-5"
                                    style={{ color: watch.accent, opacity: 0.8 }}
                                >
                                    {watch.material}
                                </p>

                                {/* Name */}
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-5 sm:mb-6 text-gradient-heading">
                                    {watch.name}
                                </h3>

                                {/* Tagline */}
                                <p
                                    className="text-base sm:text-lg font-light leading-relaxed mb-8 sm:mb-10 max-w-md"
                                    style={{
                                        color: "rgba(255,255,255,0.45)",
                                        marginLeft: isReversed ? "auto" : undefined,
                                    }}
                                >
                                    {watch.tagline}
                                </p>

                                {/* Price + CTA */}
                                <div className={`flex items-center gap-6 ${isReversed ? "justify-end" : "justify-start"}`}>
                                    <span className="text-sm font-light" style={{ color: "rgba(255,255,255,0.3)" }}>
                                        {watch.price}
                                    </span>
                                    <motion.button
                                        className="text-xs tracking-[0.2em] uppercase font-light px-6 py-2.5 rounded-full transition-all duration-300"
                                        style={{
                                            border: `1px solid ${watch.accent}30`,
                                            color: watch.accent,
                                        }}
                                        whileHover={{
                                            borderColor: `${watch.accent}60`,
                                            boxShadow: `0 0 20px ${watch.accent}15`,
                                        }}
                                    >
                                        Explore
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
