'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AIOrb() {
    const orbRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!orbRef.current || !glowRef.current) return;

        // Floating animation
        gsap.to(orbRef.current, {
            y: -20,
            rotation: 10,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Rotation of gradients
        gsap.to(orbRef.current, {
            rotate: 360,
            duration: 10,
            repeat: -1,
            ease: "none"
        });

        // Pulse glow
        gsap.to(glowRef.current, {
            scale: 1.2,
            opacity: 0.6,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, []);

    return (
        <div className="relative flex items-center justify-center h-[300px] w-[300px] md:h-[500px] md:w-[500px]">
            {/* Background Glow */}
            <div
                ref={glowRef}
                className="absolute inset-0 rounded-full bg-[#007AFF] opacity-20 blur-[80px] md:blur-[120px]"
            />

            {/* Main Orb */}
            <div
                ref={orbRef}
                className="relative h-40 w-40 md:h-64 md:w-64 rounded-full bg-gradient-to-br from-[#007AFF] via-[#00F2FF] to-transparent shadow-[0_0_50px_rgba(0,122,255,0.5)] overflow-hidden will-change-transform"
            >
                {/* Internal noise/texture */}
                <div className="absolute inset-0 opacity-30 mix-blend-overlay noise-overlay" />

                {/* Glossy highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
            </div>

            {/* Secondary Orbiting Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full animate-spin-slow">
                <div className="absolute top-0 right-1/4 h-4 w-4 rounded-full bg-[#00F2FF] blur-md opacity-60" />
                <div className="absolute bottom-1/4 left-0 h-6 w-6 rounded-full bg-[#007AFF] blur-lg opacity-40" />
            </div>
        </div>
    );
}
