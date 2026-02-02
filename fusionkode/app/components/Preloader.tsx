'use client';

import { useState, useEffect } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // 1. Counting Animation
        const obj = { value: 0 };
        gsap.to(obj, {
            value: 100,
            duration: 3,
            ease: "power2.inOut",
            onUpdate: () => {
                setCount(Math.floor(obj.value));
            },
            onComplete: () => {
                // 2. Slide Up Animation
                gsap.to(".preloader-container", {
                    yPercent: -100,
                    duration: 1.2,
                    ease: "expo.inOut",
                    onComplete: onComplete,
                });
            },
        });
    }, [onComplete]);

    return (
        <div className="preloader-container fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black">
            <div className="flex flex-col items-center gap-4">
                <span className="font-display text-8xl md:text-9xl font-bold tracking-tighter text-white will-change-transform">
                    {count.toString().padStart(3, '0')}
                </span>
                <span className="font-mono text-sm uppercase tracking-[0.5em] text-white/40">
                    Systems Initializing
                </span>
            </div>

            {/* Visual Indicator */}
            <div className="absolute bottom-20 w-40 h-[1px] bg-white/10 overflow-hidden">
                <div
                    className="h-full bg-white transition-all duration-300"
                    style={{ width: `${count}%` }}
                />
            </div>
        </div>
    );
}
