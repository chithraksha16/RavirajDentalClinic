"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
    { value: 8, suffix: "+", label: "YEARS OF EXPERIENCE" },
    { value: 500, suffix: "+", label: "PATIENTS TREATED" },
    { value: 7, suffix: "+", label: "SPECIALIZED SERVICE" },
    { value: 100, suffix: "%", label: "PATIENT SATISFACTION" },
];

function useCountUp(target: number, duration: number = 2000, start: boolean) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // easeOutQuart
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [start, target, duration]);

    return count;
}

function StatItem({
    value,
    suffix,
    label,
    start,
}: {
    value: number;
    suffix: string;
    label: string;
    start: boolean;
}) {
    const count = useCountUp(value, 2000, start);

    return (
        <div className="flex flex-col items-center gap-2 w-full">
            <span className="text-3xl font-heading md:text-3xl sm:text-5xl lg:text-5xl font-light text-white tracking-wide">
                {count}
                {suffix}
            </span>
            <span className="sm:text-xs text-[10px] font-body text-center tracking-[0.2em] text-blue-200 font-medium">
                {label}
            </span>
        </div>
    );
}

export default function StatsSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                    observer.disconnect(); // only trigger once
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className="bg-[#1a2f5e] w-full py-12 px-6"
        >
            <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
                {stats.map((stat) => (
                    <StatItem key={stat.label} {...stat} start={started} />
                ))}
            </div>
        </div>
    );
}