"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const TOTAL_FRAMES = 240;

function getFramePath(index: number): string {
    const num = String(index + 1).padStart(3, "0");
    return `/frames/ezgif-frame-${num}.jpg`;
}

export default function ScrollCanvas({
    scrollContainerRef,
}: {
    scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const currentFrameRef = useRef(0);
    const targetFrameRef = useRef(0);
    const rafRef = useRef<number>(0);
    const [loaded, setLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);

    // Preload all images
    useEffect(() => {
        let loadedCount = 0;
        const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
        let cancelled = false;

        for (let i = 0; i < TOTAL_FRAMES; i++) {
            const img = new Image();
            img.src = getFramePath(i);
            img.onload = () => {
                if (cancelled) return;
                loadedCount++;
                setLoadProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
                if (loadedCount === TOTAL_FRAMES) {
                    imagesRef.current = images;
                    setLoaded(true);
                }
            };
            img.onerror = () => {
                if (cancelled) return;
                loadedCount++;
                setLoadProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
                if (loadedCount === TOTAL_FRAMES) {
                    imagesRef.current = images;
                    setLoaded(true);
                }
            };
            images[i] = img;
        }

        return () => {
            cancelled = true;
        };
    }, []);

    // Draw frame on canvas
    const drawFrame = useCallback((frameIndex: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const img = imagesRef.current[frameIndex];
        if (!canvas || !ctx || !img || !img.complete || !img.naturalWidth) return;

        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
        }

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, rect.width, rect.height);

        // Aspect-cover to fill the canvas
        const imgAspect = img.naturalWidth / img.naturalHeight;
        const canvasAspect = rect.width / rect.height;

        let drawWidth: number, drawHeight: number, offsetX: number, offsetY: number;

        if (canvasAspect > imgAspect) {
            drawWidth = rect.width;
            drawHeight = rect.width / imgAspect;
            offsetX = 0;
            offsetY = (rect.height - drawHeight) / 2;
        } else {
            drawHeight = rect.height;
            drawWidth = rect.height * imgAspect;
            offsetX = (rect.width - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }, []);

    // Smooth LERP animation loop — interpolates toward target frame
    useEffect(() => {
        if (!loaded) return;

        drawFrame(0);

        let animating = true;

        const animate = () => {
            if (!animating) return;

            const target = targetFrameRef.current;
            const current = currentFrameRef.current;

            // Lerp factor — lower = smoother/slower, higher = snappier
            const lerp = 0.12;
            const diff = target - current;

            if (Math.abs(diff) > 0.5) {
                const nextFrame = current + diff * lerp;
                currentFrameRef.current = nextFrame;
                const frameIdx = Math.round(nextFrame);
                drawFrame(Math.max(0, Math.min(TOTAL_FRAMES - 1, frameIdx)));
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            animating = false;
            cancelAnimationFrame(rafRef.current);
        };
    }, [loaded, drawFrame]);

    // Scroll handler — sets target frame (the lerp loop handles smooth transition)
    useEffect(() => {
        if (!loaded) return;

        const handleScroll = () => {
            const container = scrollContainerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const scrollableHeight = container.offsetHeight - window.innerHeight;
            const scrolled = -rect.top;
            const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
            targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loaded, scrollContainerRef]);

    // Handle resize
    useEffect(() => {
        if (!loaded) return;
        const handleResize = () => drawFrame(Math.round(currentFrameRef.current));
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [loaded, drawFrame]);

    return (
        <>
            {/* Loading overlay */}
            {!loaded && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
                    <div className="loader-ring mb-6" />
                    <p
                        className="text-sm tracking-[0.3em] uppercase"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                        Loading Experience
                    </p>
                    <div className="mt-4 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full rounded-full transition-all duration-300 ease-out"
                            style={{
                                width: `${loadProgress}%`,
                                background: "linear-gradient(90deg, #00E5FF, #ffffff)",
                            }}
                        />
                    </div>
                    <p className="mt-2 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                        {loadProgress}%
                    </p>
                </div>
            )}

            {/* Canvas */}
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ display: "block" }}
            />
        </>
    );
}
