"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

// ─── Types ───────────────────────────────────────────────────────────────────
type GalleryItem =
    | { type: "video"; src: string; poster?: string }
    | { type: "image"; src: string; alt: string };

// ─── Data — replace src/poster with your real assets ────────────────────────
const ITEMS: GalleryItem[] = [
    { type: "video", src: "/gallery/rrdcvid1_hJdcREnf.mp4", poster: "/clinic-video-poster.jpg" },
    { type: "image", src: "/gallery/gallery1.webp", alt: "Clinic room 1" },
    { type: "image", src: "/gallery/gallery2.webp", alt: "Clinic room 2" },
    { type: "image", src: "/gallery/gallery3.webp", alt: "Clinic interior" },
    { type: "image", src: "/gallery/gallery4.webp", alt: "Treatment room" },
    { type: "image", src: "/gallery/gallery5.webp", alt: "Reception area" },
    { type: "image", src: "/gallery/gallery6.webp", alt: "Waiting room" },
];

// ─── Card sizes (in px) — drives the peek effect ─────────────────────────────
const CARD_W = 260;
const CARD_H = 340;
const GAP = 16;

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ClinicGallery() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [activeIdx, setActiveIdx] = useState(0);

    const startX = useRef(0);
    const startScrollLeft = useRef(0);
    const isDragging = useRef(false);

    const scrollToIndex = useCallback((idx: number) => {
        if (!trackRef.current) return;
        const clamped = Math.max(0, Math.min(idx, ITEMS.length - 1));
        setActiveIdx(clamped);
        const offset = clamped * (CARD_W + GAP);
        trackRef.current.scrollTo({ left: offset, behavior: "smooth" });
    }, []);

    const onScroll = useCallback(() => {
        if (!trackRef.current) return;
        const idx = Math.round(trackRef.current.scrollLeft / (CARD_W + GAP));
        setActiveIdx(Math.max(0, Math.min(idx, ITEMS.length - 1)));
    }, []);

    const onMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        startX.current = e.pageX;
        startScrollLeft.current = trackRef.current?.scrollLeft ?? 0;
        if (trackRef.current) trackRef.current.style.cursor = "grabbing";
    };
    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !trackRef.current) return;
        const dx = e.pageX - startX.current;
        trackRef.current.scrollLeft = startScrollLeft.current - dx;
    };
    const onMouseUp = () => {
        isDragging.current = false;
        if (trackRef.current) trackRef.current.style.cursor = "grab";
    };

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;
        el.addEventListener("scroll", onScroll, { passive: true });
        return () => el.removeEventListener("scroll", onScroll);
    }, [onScroll]);

    return (
        <section className="w-full bg-white py-5 sm:py-9 lg:py-14 overflow-hidden">

            {/* ── Swipe hint ── */}
            <div className="text-center mb-6 sm:mb-8 px-4">
                <div className="flex items-center justify-center gap-2 mt-4 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#999] font-medium select-none">
                    <svg viewBox="0 0 20 20" fill="none" className="w-3 h-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 10H5M5 10l4-4M5 10l4 4" />
                    </svg>
                    Swipe to explore
                    <svg viewBox="0 0 20 20" fill="none" className="w-3 h-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 10h10M15 10l-4-4M15 10l-4 4" />
                    </svg>
                </div>
            </div>

            {/* ── Scrollable track ── */}
            <div
                ref={trackRef}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
                className="flex gap-6 overflow-x-auto scrollbar-hide px-[max(1rem,calc((100vw-880px)/2))]"
                style={{
                    cursor: "grab",
                    scrollSnapType: "x mandatory",
                    WebkitOverflowScrolling: "touch",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
            >
                {ITEMS.map((item, i) => (
                    <div
                        key={i}
                        onClick={() => scrollToIndex(i)}
                        className="shrink-0 relative rounded-2xl overflow-hidden bg-[#f0f0f0] transition-all duration-300"
                        style={{
                            width: CARD_W,
                            height: CARD_H,
                            scrollSnapAlign: "start",
                            transform: activeIdx === i ? "scale(1.03)" : "scale(1)",
                            boxShadow:
                                activeIdx === i
                                    ? "0 16px 40px rgba(26,90,184,0.18)"
                                    : "0 4px 16px rgba(0,0,0,0.08)",
                        }}
                    >
                        {item.type === "video" ? (
                            /* ── Autoplay looping video, no controls ── */
                            <video
                                src={item.src}
                                poster={item.poster}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        ) : (
                            /* ── Image card ── */
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                                sizes="260px"
                            />
                        )}

                        {/* Bottom gradient */}
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/25 to-transparent pointer-events-none" />
                    </div>
                ))}

                {/* Right padding sentinel */}
                <div className="shrink-0 w-4" aria-hidden="true" />
            </div>

            {/* ── Dot indicators ── */}
            <div className="flex items-center justify-center gap-1.5 mt-6 sm:mt-8">
                {ITEMS.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollToIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className="transition-all duration-300 rounded-full"
                        style={{
                            width: activeIdx === i ? 28 : 8,
                            height: 8,
                            background: activeIdx === i ? "#1a5ab8" : "#d1d5db",
                        }}
                    />
                ))}
            </div>
        </section>
    );
}