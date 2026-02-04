'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(contentRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: contentRef.current, start: "top 85%", toggleActions: "play none none reverse" } });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="contact" className="relative w-full py-24 md:py-48 bg-[#0a0a0c] px-6 md:px-12 overflow-hidden flex flex-col items-center border-t border-white/5">
            {/* DEPTH GLOW */}
            <div className="absolute inset-0 depth-glow-cyan pointer-events-none opacity-20" />

            <div className="w-full max-w-[1320px] relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
                    <div className="flex flex-col gap-10 text-center md:text-left">
                        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-cyan/40">[ ESTABLISH CONNECTION ]</span>
                        <h3 className="font-display font-black uppercase tracking-tighter text-white mt-8 leading-none" style={{ fontSize: 'var(--font-size-h2)' }}>START THE <br />BUILD.</h3>
                        <div className="mt-8 flex justify-center md:justify-start">
                            <div className="premium-glow rounded-full">
                                <a href="https://wa.me/923390140860" className="btn-premium flex items-center gap-4 bg-white/5">
                                    WhatsApp Protocol <span>→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-10 md:p-16 bg-white/[0.01] flex flex-col gap-10 w-full glass-panel rounded-[2rem]">
                        <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-4">
                                <label className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20 ml-2">Identification</label>
                                <input type="text" className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl font-mono text-sm uppercase focus:outline-none focus:border-cyan/40 focus:bg-white/[0.05] transition-all" placeholder="YOUR_NAME" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20 ml-2">Contact Router</label>
                                <input type="email" className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl font-mono text-sm uppercase focus:outline-none focus:border-cyan/40 focus:bg-white/[0.05] transition-all" placeholder="YOUR_EMAIL" />
                            </div>
                            <div className="premium-glow rounded-2xl w-full">
                                <button className="btn-premium w-full bg-cyan text-black font-black border-none hover:bg-white hover:text-black">
                                    Transmit Proposal
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
