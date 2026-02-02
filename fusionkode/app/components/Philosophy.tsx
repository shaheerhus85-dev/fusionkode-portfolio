'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(contentRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative w-full py-24 md:py-32 border-y border-white/[0.03] bg-[#0A0A0A] px-6 md:px-12 flex flex-col items-center"
        >
            <div ref={contentRef} className="w-full max-w-[1320px] text-center md:text-left">
                <span className="font-mono text-[12px] uppercase tracking-[0.4em] text-white/40">[ THE ETHOS ]</span>

                <h3 className="font-display font-bold uppercase tracking-tighter text-white mt-12 leading-none" style={{ fontSize: 'clamp(28px, 6vw, 80px)' }}>
                    "WE DON'T BUILD <span className="text-white/20">TEMPLATES.</span> <br />
                    WE ARCHITECT <span className="text-cyan">SOLUTIONS.</span>"
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 mt-24 md:mt-32">
                    <div className="flex flex-col gap-8 border-l border-white/10 pl-8 text-left">
                        <h4 className="font-mono text-[13px] uppercase tracking-[0.3em] text-white">Problem First</h4>
                        <p className="font-sans text-white/40 leading-relaxed max-w-sm" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)' }}>
                            If the technology doesn't solve a specific friction point or drive ROI, it doesn't get built. We are architects of efficiency, not just aesthetics.
                        </p>
                    </div>
                    <div className="flex flex-col gap-8 border-l border-white/10 pl-8 text-left">
                        <h4 className="font-mono text-[13px] uppercase tracking-[0.3em] text-white">AI Core Logic</h4>
                        <p className="font-sans text-white/40 leading-relaxed max-w-sm" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)' }}>
                            Every system we build today is prepared for the AI-driven tomorrow. We integrate autonomous logic at the base layer, ensuring long-term scalability.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
