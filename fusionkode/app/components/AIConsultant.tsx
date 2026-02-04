'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AIConsultant() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".nexa-reveal",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
            }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0B]">
            <div className="w-full max-w-[1240px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">

                {/* Visual Side: Minimal Orb */}
                <div className="flex justify-center items-center relative h-[300px] md:h-[400px]">
                    <div className="absolute inset-0 bg-cyan opacity-[0.05] blur-[100px] animate-pulse" />
                    <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full glass-panel flex items-center justify-center border-cyan/10 shadow-[0_0_80px_rgba(0,242,255,0.1)] overflow-hidden">
                        {/* Core */}
                        <div className="w-4 h-4 rounded-full bg-cyan shadow-[0_0_30px_rgba(0,242,255,1)] z-20" />

                        {/* Orbitals */}
                        <div className="absolute inset-6 border border-cyan/20 rounded-full animate-[spin_8s_linear_infinite]" />
                        <div className="absolute inset-12 border border-white/5 rounded-full animate-[spin_12s_linear_infinite_reverse]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-cyan/10 to-transparent opacity-50" />

                        {/* Scanline Effect */}
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,242,255,0.05)_50%,transparent_100%)] bg-[length:100%_4px] animate-[scanline_4s_linear_infinite]" />
                    </div>
                </div>

                {/* Text Side */}
                <div className="flex flex-col gap-8 nexa-reveal text-center md:text-left">
                    <div className="flex flex-col gap-3">
                        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-cyan/60 font-bold">[ PRINCIPAL AI AGENT ]</span>
                        <h2 className="font-display font-black uppercase tracking-tight text-white leading-none" style={{ fontSize: 'var(--font-size-h2)' }}>
                            AGENT NEXA.
                        </h2>
                    </div>

                    <p className="font-sans text-white/50 text-lg md:text-2xl leading-relaxed font-light italic">
                        "Architecting complex automation with consultant-level precision."
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {['English', 'Roman Urdu', 'Arabic'].map(lang => (
                            <span key={lang} className="px-4 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[9px] uppercase tracking-widest text-white/50 group-hover:text-cyan transition-colors">
                                {lang}
                            </span>
                        ))}
                    </div>

                    <p className="font-sans text-white/30 text-base max-w-md leading-relaxed">
                        NEXA is designed to bridge the gap between high-level business strategy and technical execution, operating with autonomous intelligence.
                    </p>

                    <div className="premium-glow rounded-full w-fit mx-auto md:mx-0">
                        <a href="#contact" className="btn-premium">
                            Discuss Your Project
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
