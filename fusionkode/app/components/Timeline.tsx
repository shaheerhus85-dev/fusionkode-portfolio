'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(lineRef.current, { scaleY: 1, ease: "none", scrollTrigger: { trigger: containerRef.current, start: "top 50%", end: "bottom 50%", scrub: true } });
        gsap.fromTo(".timeline-item", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", stagger: 0.3, scrollTrigger: { trigger: containerRef.current, start: "top 80%" } });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full py-24 md:py-48 bg-[#000000] px-6 md:px-12 flex flex-col items-center">
            <div className="w-full max-w-[1320px] relative">
                <div ref={lineRef} className="absolute left-[20px] md:left-1/2 top-0 w-[1px] h-full bg-white/10 origin-top scale-y-0" />
                <div className="flex flex-col gap-24 md:gap-40">
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className={`timeline-item flex flex-col md:flex-row gap-12 items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1 w-full bg-white/[0.02] border border-white/5 p-8 glass-panel">
                                <span className="font-mono text-[10px] text-cyan uppercase tracking-widest">Phase 0{i + 1}</span>
                                <h4 className="font-display text-2xl font-bold uppercase text-white mt-4">System Discovery</h4>
                                <p className="font-sans text-sm text-white/40 leading-relaxed mt-4">We map your current architecture to identify high-impact automation gaps.</p>
                            </div>
                            <div className="relative z-10 w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center shrink-0">
                                <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                            </div>
                            <div className="flex-1 hidden md:block" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
