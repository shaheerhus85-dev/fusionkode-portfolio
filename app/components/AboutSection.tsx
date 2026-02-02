'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Reveal typography on scroll
        const items = containerRef.current?.querySelectorAll('.about-reveal');
        items?.forEach((item) => {
            gsap.fromTo(item,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            id="about"
            className="relative z-30 bg-black min-h-screen py-32 md:py-64 px-8 md:px-16 -mt-[10vh] rounded-t-[50px] md:rounded-t-[120px] shadow-[0_-20px_50px_rgba(0,0,0,1)]"
        >
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <div className="flex flex-col gap-8">
                        <span className="about-reveal font-mono text-[12px] uppercase tracking-[0.5em] text-white/40">
                            [ AGENT-DRIVEN DEVELOPMENT ]
                        </span>
                        <h2 className="about-reveal font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white leading-none">
                            WE ARE <br /> LOGIC <br /> ARCHITECTS.
                        </h2>
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
            </div>

            {/* Grid Texture Transition to Solid Black handled by section bg */}
        </section>
    );
}
