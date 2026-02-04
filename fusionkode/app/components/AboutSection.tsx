'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".reveal-text",
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
        <section ref={containerRef} id="about" className="relative w-full py-24 md:py-48 bg-[#0a0a0c] px-6 md:px-12 overflow-hidden flex flex-col items-center">
            {/* DEPTH GLOW */}
            <div className="absolute inset-0 depth-glow-violet pointer-events-none opacity-10" />

            <div className="w-full max-w-[1320px] relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="flex flex-col gap-10">
                        <span className="reveal-text font-mono text-[10px] uppercase tracking-[0.5em] text-violet/40 text-center md:text-left">[ THE ARCHITECT ]</span>
                        <h3 className="reveal-text font-display font-black uppercase tracking-tighter text-white leading-none text-center md:text-left" style={{ fontSize: 'var(--font-size-h2)' }}>
                            ENGINEERING <br /> WITH <br /> INTENT.
                        </h3>
                    </div>
                    <div className="flex flex-col gap-8">
                        <p className="reveal-text font-sans text-lg md:text-2xl text-white/50 leading-relaxed font-light">
                            I specialize in building intelligent automation frameworks and premium digital interfaces. My goal is to bridge the gap between complex engineering and seamless user experience.
                        </p>
                        <p className="reveal-text font-sans text-base md:text-xl text-white/30 leading-relaxed font-light">
                            Every project is treated as a high-performance system, optimized for scalability, speed, and conversion.
                        </p>
                        <div className="mt-8 flex justify-center md:justify-start">
                            <a href="#contact" className="btn-premium flex items-center gap-4">
                                Book Consultation <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
