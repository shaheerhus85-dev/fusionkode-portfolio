'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(contentRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: contentRef.current, start: "top 85%", toggleActions: "play none none reverse" } });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="contact" className="relative w-full pt-24 md:pt-40 pb-16 bg-[#000000] px-6 md:px-12 overflow-hidden flex flex-col items-center">
            <div ref={contentRef} className="w-full max-w-[1320px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-start">
                    <div className="flex flex-col gap-10 text-center md:text-left">
                        <span className="font-mono text-[12px] uppercase tracking-[0.4em] text-white/40">[ ESTABLISH CONNECTION ]</span>
                        <h3 className="font-display font-bold uppercase tracking-tighter text-white mt-8 leading-[0.9]" style={{ fontSize: 'clamp(32px, 7vw, 100px)' }}>START THE <br />BUILD.</h3>
                        <a href="https://wa.me/923390140860" className="cta-underline-draw inline-flex items-center justify-center md:justify-start gap-6 group w-fit mx-auto md:mx-0 py-2 relative">
                            <span className="font-mono text-[13px] uppercase tracking-[0.3em] text-white">WhatsApp Protocol</span>
                            <span className="line absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500" />
                        </a>
                    </div>
                    <div className="relative border border-white/[0.05] p-8 md:p-12 bg-white/[0.02] flex flex-col gap-10 w-full glass-panel">
                        <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                            <input type="text" className="bg-transparent border-b border-white/10 p-2 font-mono text-[11px] uppercase focus:outline-none focus:border-white transition-colors" placeholder="Identification // Name" />
                            <input type="email" className="bg-transparent border-b border-white/10 p-2 font-mono text-[11px] uppercase focus:outline-none focus:border-white transition-colors" placeholder="Contact // Email" />
                            <button className="cta-glow-outline flex items-center justify-center gap-6 group mt-6 bg-white text-black py-4 px-10 font-mono text-[12px] uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500">
                                <span>Transmit Proposal</span>
                                <span className="group-hover:translate-x-2 transition-transform">→</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
