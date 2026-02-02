'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(".about-reveal",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="about" className="relative w-full py-24 md:py-48 bg-[#000000] px-6 md:px-12 flex flex-col items-center overflow-hidden">
            <div className="w-full max-w-[1320px] grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
                <div className="flex flex-col gap-8">
                    <span className="about-reveal font-mono text-[12px] uppercase tracking-[0.5em] text-white/40">[ THE ARCHITECT ]</span>
                    <h3 className="about-reveal font-display font-bold uppercase tracking-tighter text-white leading-[0.9]" style={{ fontSize: 'clamp(40px, 8vw, 100px)' }}>ENGINEERING <br />INTENT.</h3>
                </div>
                <div className="flex flex-col gap-12 mt-12 md:mt-0">
                    <p className="about-reveal font-sans text-xl md:text-3xl text-white/60 leading-tight tracking-tight">
                        I am a Digital Systems Architect. At FusionKode, we don’t believe in agency fluff. We believe in engineering.
                    </p>
                    <div className="about-reveal flex flex-col gap-8 border-l border-white/10 pl-8">
                        <p className="font-sans text-white/40 leading-relaxed text-lg italic">
                            "My focus is on helping businesses bridge the gap between manual operations and AI-driven efficiency through custom-built agents and robust web infrastructure."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
