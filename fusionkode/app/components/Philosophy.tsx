'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".reveal-text", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: contentRef.current, start: "top 85%", toggleActions: "play none none reverse" } });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full py-24 md:py-32 bg-[#0a0a0c] px-6 md:px-12 flex flex-col items-center overflow-hidden">
            {/* DEPTH GLOW */}
            <div className="absolute inset-0 depth-glow-cyan pointer-events-none opacity-10" />

            <div ref={contentRef} className="w-full max-w-[1000px] flex flex-col gap-16 text-center relative z-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-cyan/40">[ OUR CORE PHILOSOPHY ]</span>
                <h3 className="reveal-text font-display font-black uppercase tracking-tighter text-white leading-none" style={{ fontSize: 'var(--font-size-h2)' }}>COMPLEXITY <br /> SIMPLIFIED.</h3>
                <p className="reveal-text font-sans text-lg md:text-3xl text-white/40 leading-relaxed font-light">
                    We don't just build websites; we build <span className="text-white font-medium italic">autonomous growth engines</span>. By automating the mundane, we unlock your capacity for innovation.
                </p>
                <div className="flex justify-center mt-12">
                    <div className="premium-glow rounded-full">
                        <a href="#services" className="btn-premium flex items-center gap-4">
                            Deploy Intelligence <span>↓</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
