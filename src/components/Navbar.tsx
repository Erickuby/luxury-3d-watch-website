"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Collection", href: "#collection" },
    { label: "Technology", href: "#technology" },
    { label: "Features", href: "#features" },
    { label: "Try-On", href: "#tryon" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
            <motion.nav
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                    background: scrolled
                        ? "rgba(0, 0, 0, 0.7)"
                        : "transparent",
                    backdropFilter: scrolled ? "blur(20px)" : "none",
                    WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
                    borderBottom: scrolled
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "1px solid transparent",
                }}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <a
                        href="#hero"
                        onClick={(e) => handleNavClick(e, "#hero")}
                        className="flex items-center gap-2 group"
                    >
                        <div
                            className="w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(0,229,255,0.3)]"
                            style={{ borderColor: "#00E5FF" }}
                        >
                            <div className="w-2 h-2 rounded-full" style={{ background: "#00E5FF" }} />
                        </div>
                        <span className="text-sm tracking-[0.3em] uppercase font-light">
                            Chrono <span style={{ color: "#00E5FF" }}>AI</span>
                        </span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-xs tracking-[0.2em] uppercase font-light transition-colors duration-300 hover:text-[#00E5FF]"
                                style={{ color: "rgba(255,255,255,0.5)" }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <a
                        href="#tryon"
                        onClick={(e) => handleNavClick(e, "#tryon")}
                        className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-xs tracking-[0.15em] uppercase font-light transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                        style={{
                            border: "1px solid rgba(0,229,255,0.3)",
                            color: "#00E5FF",
                        }}
                    >
                        <span>Book Try-On</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6h8M7 3l3 3-3 3" stroke="#00E5FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            className="block w-5 h-[1px]"
                            style={{ background: "rgba(255,255,255,0.6)" }}
                            animate={mobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            className="block w-5 h-[1px]"
                            style={{ background: "rgba(255,255,255,0.6)" }}
                            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            className="block w-5 h-[1px]"
                            style={{ background: "rgba(255,255,255,0.6)" }}
                            animate={mobileOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.2 }}
                        />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile menu overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            background: "rgba(0, 0, 0, 0.95)",
                            backdropFilter: "blur(30px)",
                        }}
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-xl tracking-[0.3em] uppercase font-extralight"
                                style={{ color: "rgba(255,255,255,0.7)" }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ delay: i * 0.06 }}
                                whileHover={{ color: "#00E5FF" }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.a
                            href="#tryon"
                            onClick={(e) => handleNavClick(e, "#tryon")}
                            className="mt-4 px-8 py-3 rounded-full text-sm tracking-[0.2em] uppercase font-light"
                            style={{
                                border: "1px solid rgba(0,229,255,0.4)",
                                color: "#00E5FF",
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Book Try-On
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
