'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ProblemHook() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".problem-text",
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
        <section ref={containerRef} className="relative w-full py-24 md:py-32 bg-[#0a0a0c] px-6 md:px-12 flex flex-col items-center overflow-hidden">
            {/* DEPTH GLOW */}
            <div className="absolute inset-0 depth-glow-violet pointer-events-none opacity-10" />

            <div className="w-full max-w-[1200px] flex flex-col gap-16 md:gap-24 items-center relative z-10">
                <div className="flex flex-col gap-6 text-center">
                    <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-violet/40 italic">[ THE STATUS QUO ]</span>
                    <h3 className="problem-text font-display font-black uppercase tracking-tighter text-white/10 leading-none select-none" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>STAGNATION.</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 w-full">
                    {[
                        { label: "INEFFICIENCY", text: "Manual processes are draining your team's velocity and increasing error rates." },
                        { label: "OBSOLETE", text: "Your current stack is unable to keep pace with the rapidly evolving AI landscape." }
                    ].map((item, i) => (
                        <div key={i} className="problem-text flex flex-col gap-4 text-center md:text-left group">
                            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-violet/60 font-bold">PROTOCOL_{item.label}</span>
                            <p className="font-sans text-lg md:text-xl text-white/40 leading-relaxed font-light group-hover:text-white/70 transition-colors">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
