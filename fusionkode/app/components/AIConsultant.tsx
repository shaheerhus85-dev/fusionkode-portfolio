'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function AIConsultant() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(cardRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full py-24 md:py-32 bg-[#000000] px-6 md:px-12 overflow-hidden flex flex-col items-center">
            <div className="w-full max-w-[1320px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="flex flex-col gap-8 text-center md:text-left">
                    <h2 className="font-mono text-[12px] uppercase tracking-[0.4em] text-white/40">[ AGENT B — CONSULTANT ]</h2>
                    <h3 className="font-display font-bold uppercase tracking-tighter text-white leading-none" style={{ fontSize: 'clamp(32px, 5vw, 80px)' }}>COMMUNICATE IN <br /> ANY LANGUAGE.</h3>
                    <p className="font-sans text-white/50 max-w-md mx-auto md:mx-0 leading-relaxed text-lg">Our autonomous agents are built to understand intent across 20+ languages. No barriers. Just solutions.</p>
                    <div className="mt-4">
                        <a href="#contact" className="cta-underline-draw font-mono text-[13px] uppercase tracking-[0.3em] text-white group relative py-2 block w-fit mx-auto md:mx-0">
                            [ Start Conversation ]
                            <span className="line absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500" />
                        </a>
                    </div>
                </div>
                <div ref={cardRef} className="relative glass-panel rounded-none p-8 md:p-12 flex flex-col gap-10 w-full will-change-transform">
                    <div className="flex items-center justify-between border-b border-white/5 pb-6">
                        <div className="flex items-center gap-4">
                            <div className="h-2 w-2 rounded-full bg-cyan animate-pulse shadow-[0_0_10px_rgba(0,242,255,0.5)]" />
                            <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Status: Active Agent</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-3 max-w-[85%]">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">Agent B</span>
                            <div className="bg-white/[0.03] p-6 text-sm text-white/80 leading-relaxed border-l-2 border-white/10">You can message me in any language — I’ll understand. How can I assist with your system architecture today?</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
