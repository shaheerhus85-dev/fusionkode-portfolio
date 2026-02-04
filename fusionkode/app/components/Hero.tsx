'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const hookRef = useRef<HTMLHeadingElement>(null);
    const subtextRef = useRef<HTMLParagraphElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Infinite Looping Marquee
        gsap.to(marqueeRef.current, {
            xPercent: -50,
            duration: 25,
            ease: "none",
            repeat: -1,
        });

        const tl = gsap.timeline({ delay: 0.5 });

        tl.fromTo(hookRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
        )
            .fromTo(subtextRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
                "-=0.6"
            );
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="hero-section relative w-full h-screen flex items-center justify-center bg-[#0A0A0B] overflow-hidden"
        >
            {/* Layer 1: Kinetic Background Marquee - Forced Absolute No-Flow */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] select-none pointer-events-none z-0 overflow-hidden">
                <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
                    {Array(4).fill(0).map((_, i) => (
                        <span key={i} className="font-display font-black uppercase text-[40vw] md:text-[30vw] tracking-tighter px-[5vw] text-white leading-none">
                            FUSIONKODE
                        </span>
                    ))}
                </div>
            </div>

            {/* Layer 2: Subtle Mesh Gradient */}
            <div className="absolute inset-0 mesh-gradient opacity-30 pointer-events-none z-[1]" />

            <div className="relative z-10 w-full max-w-[1440px] px-6 md:px-12 flex flex-col items-center justify-center text-center">
                <div className="flex flex-col gap-8 md:gap-12 items-center mt-32 md:mt-40">
                    <div className="premium-glow rounded-full">
                        <span className="font-mono text-[10px] md:text-[12px] uppercase tracking-[0.5em] text-cyan/70 border border-cyan/20 bg-cyan/5 px-6 py-3 rounded-full inline-block font-bold">
                            System Protocol Activated v2.1
                        </span>
                    </div>

                    <h1
                        ref={hookRef}
                        className="font-display font-black uppercase tracking-tighter leading-[0.9] text-white"
                        style={{ fontSize: 'var(--font-size-hero)' }}
                    >
                        TRANSFORMING <br />
                        <span className="text-cyan drop-shadow-[0_0_25px_rgba(0,242,255,0.5)]">BUSINESS LOGIC</span> <br />
                        INTO AUTOMATION.
                    </h1>

                    <p
                        ref={subtextRef}
                        className="font-sans text-white/40 max-w-2xl mx-auto leading-relaxed md:text-2xl font-light italic"
                    >
                        Architecting high-performance AI systems and autonomous agents for businesses operating at the edge of possibility.
                    </p>

                    <div className="mt-10 flex flex-col md:flex-row gap-8 items-center">
                        <div className="premium-glow rounded-full">
                            <a href="#contact" className="btn-premium px-12 py-6">
                                Start Consultation
                            </a>
                        </div>
                        <a href="#lab" className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/30 hover:text-white transition-all group flex items-center gap-3">
                            Explore Build Lab <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Subtle Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20">
                <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent animate-pulse" />
            </div>
        </section>
    );
}
