"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
export default function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);

  const getPos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return 50;

    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return (x / rect.width) * 100;
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    setSliderPos(getPos(e.clientX));
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    setSliderPos(getPos(e.clientX));
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="flex flex-col items-center justify-center h-auto py-10">
      {/* Heading */}
      <div className="mb-6 sm:mb-8 text-center">
        <p className="text-[10px] sm:text-xs tracking-[0.3em] text-[#a0916e] uppercase font-heading font-semibold mb-2">
          Smile Transformation
        </p>

        <h2 className="text-xl sm:text-3xl md:text-4xl font-light text-white leading-tight">
          See the Difference
        </h2>

        <div className="mt-3 mx-auto w-12 h-0.5 bg-[#a0916e]" />
      </div>

      {/* Slider */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="relative w-full max-w-170 aspect-4/3 sm:aspect-16/10 rounded-xl sm:rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl border border-white/10"
        style={{ touchAction: "pan-y" }}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <Image
            src="/treatments/damagd-before.webp"
            alt="Before treatment"
            className="w-full h-full object-cover object-center"
            sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 80vw,
         531px"
            draggable={false}
          />

          <span className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 text-[10px] sm:text-xs tracking-widest uppercase text-white/80 bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full border border-white/20 font-medium">
            Before
          </span>
        </div>

        {/* After Image */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          }}
        >
          <Image
            src="/treatments/bright-after.webp"
            alt="After treatment"
            className="w-full h-full object-cover object-center"
            sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 80vw,
         531px"
            draggable={false}
          />

          <span className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 text-[10px] sm:text-xs tracking-widest uppercase text-white/80 bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full border border-white/20 font-medium">
            After
          </span>
        </div>

        {/* Divider */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.6)]"
          style={{
            left: `${sliderPos}%`,
            transform: "translateX(-50%)",
          }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-xl border border-white/30 z-10"
          style={{
            left: `${sliderPos}%`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-4 h-4 sm:w-5 sm:h-5 text-[#333]"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 3 12 9 6" />
            <polyline points="9 18 15 12 9 6" transform="translate(6,0)" />
            <polyline points="15 18 21 12 15 6" transform="translate(-6,0)" />
          </svg>
        </div>

        {/* Border Overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/10" />
      </div>

      {/* Caption */}
      <p className="mt-5 sm:mt-7 text-[10px] sm:text-[11px] tracking-[0.25em] text-[#666] uppercase text-center font-medium">
        Drag left and right to check after and before
      </p>
    </section>
  );
}