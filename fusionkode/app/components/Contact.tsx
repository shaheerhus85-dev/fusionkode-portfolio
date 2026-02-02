'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Contact() {
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
            id="contact"
            className="relative w-full pt-24 md:pt-40 pb-16 bg-[#000000] px-6 md:px-12 overflow-hidden flex flex-col items-center"
        >
            <div ref={contentRef} className="w-full max-w-[1320px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-start">

                    {/* Left - Direct Access */}
                    <div className="flex flex-col gap-10 text-center md:text-left">
                        <div>
                            <span className="font-mono text-[12px] uppercase tracking-[0.4em] text-white/40">[ ESTABLISH CONNECTION ]</span>
                            <h3 className="font-display font-bold uppercase tracking-tighter text-white mt-8 leading-[0.9]" style={{ fontSize: 'clamp(32px, 7vw, 100px)' }}>START THE <br />BUILD.</h3>
                        </div>

                        <div className="flex flex-col gap-12 mt-12">
                            <div className="flex flex-col gap-2">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">Operational Base</span>
                                <p className="font-display text-xl uppercase font-bold text-white/80 tracking-tight">Karachi, Pakistan // Global Clients</p>
                            </div>

                            <a
                                href="https://wa.me/923390140860"
                                className="cta-underline-draw inline-flex items-center justify-center md:justify-start gap-6 group w-fit mx-auto md:mx-0 py-2 relative"
                            >
                                <div className="h-14 w-14 rounded-none border border-white/10 flex items-center justify-center group-hover:bg-white/[0.05] transition-all duration-500">
                                    <span className="font-mono text-xl text-white">→</span>
                                </div>
                                <span className="font-mono text-[13px] uppercase tracking-[0.3em] text-white">
                                    WhatsApp Protocol
                                </span>
                                <span className="line absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500" />
                            </a>
                        </div>
                    </div>

                    {/* Right - Specification Form */}
                    <div className="relative border border-white/[0.05] p-8 md:p-12 bg-white/[0.02] flex flex-col gap-10 w-full glass-panel">
                        <div className="flex items-center justify-between border-b border-white/5 pb-8">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-white">Project Specification Form</span>
                            <span className="h-1 w-1 bg-cyan rounded-full animate-pulse" />
                        </div>

                        <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <input type="text" className="bg-transparent border-b border-white/10 p-2 font-mono text-[11px] uppercase focus:outline-none focus:border-white transition-colors" placeholder="Identification // Name" />
                                <input type="email" className="bg-transparent border-b border-white/10 p-2 font-mono text-[11px] uppercase focus:outline-none focus:border-white transition-colors" placeholder="Contact // Email" />
                            </div>
                            <select className="bg-transparent border-b border-white/10 p-2 font-mono text-[11px] uppercase focus:outline-none focus:border-white transition-colors text-white/40 cursor-pointer">
                                <option className="bg-[#000000]">Select Core Required: Web Systems</option>
                                <option className="bg-[#000000]">Select Core Required: AI Automation</option>
                                <option className="bg-[#000000]">Select Core Required: UI Framework</option>
                            </select>
                            <textarea rows={4} className="bg-transparent border-b border-white/10 p-2 font-mono text-[11px] uppercase focus:outline-none focus:border-white transition-colors resize-none" placeholder="Project Brief // Objectives" />

                            <button className="cta-glow-outline flex items-center justify-center gap-6 group mt-6 bg-white text-black py-4 px-10 font-mono text-[12px] uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500">
                                <span>Transmit Proposal</span>
                                <span className="group-hover:translate-x-2 transition-transform">→</span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Log */}
                <footer className="mt-32 md:mt-40 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                    <div className="flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_8px_rgba(0,242,255,0.4)]" />
                        <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/20">FusionKode Architectural Systems v1.0.4</p>
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/20">© 2024 Project HQ</p>
                </footer>
            </div>
        </section>
    );
}
