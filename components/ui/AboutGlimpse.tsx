"use client";

import { useRef, useState } from "react";

const mediaItems = [
  { type: "video", src: "/gallery/Rrdcvid2.mp4" },
  { type: "image", src: "/gallery/gallery7.webp" },
  { type: "image", src: "/gallery/gallery5.webp" },
  { type: "image", src: "/gallery/gallery3.webp" },
  { type: "image", src: "/gallery/gallery2.webp" },
];

export default function ClinicGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const index = Math.round(
      scrollRef.current.scrollLeft / scrollRef.current.offsetWidth
    );

    setActive(index);
  };

  const scrollTo = (i: number) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollTo({
      left: i * scrollRef.current.offsetWidth,
      behavior: "smooth",
    });

    setActive(i);
  };

  return (
    <div className="w-full">
      {/* ================= MOBILE ================= */}
      <div className="block md:hidden">
        <p className="text-center text-[11px] font-semibold tracking-[0.2em] text-[#1a2f5e] mb-4">
          ← SWIPE TO EXPLORE →
        </p>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 px-6 pb-2 no-scrollbar"
        >
          {mediaItems.map((item, i) => (
            <div
              key={i}
              className={`snap-center shrink-0 w-[75vw] h-85 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                active === i
                  ? "border-[#1a2f5e]"
                  : "border-transparent"
              }`}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={item.src}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {mediaItems.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`rounded-full transition-all duration-300 ${
                active === i
                  ? "w-6 h-2 bg-[#1a2f5e]"
                  : "w-2 h-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex justify-center">
        <div className="grid grid-cols-[300px_650px] gap-5 h-107.5">
          
          {/* Video */}
          <div className="rounded-2xl overflow-hidden">
            <video
              src={mediaItems[0].src}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4 h-full">
            {mediaItems.slice(1).map((item, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
              >
                <img
                  src={item.src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}