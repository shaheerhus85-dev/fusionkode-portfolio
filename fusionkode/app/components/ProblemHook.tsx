'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ProblemHook() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(".hook-reveal",
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
        <section ref={containerRef} className="relative w-full py-24 md:py-48 bg-[#000000] px-6 flex flex-col items-center text-center">
            <div className="flex flex-col items-center gap-12">
                <div className="hook-reveal w-24 h-[1px] bg-white/20 mb-4" />
                <h2 className="hook-reveal font-display font-bold uppercase tracking-tighter leading-[0.9] text-white" style={{ fontSize: 'clamp(32px, 8vw, 100px)' }}>
                    NOT JUST CODE. <br />
                    <span className="text-white/20">SYSTEMS THAT THINK.</span>
                </h2>
                <div className="hook-reveal w-full max-w-2xl">
                    <p className="font-sans text-white/40 md:text-2xl leading-relaxed">
                        We build technical architecture that transforms fragmented processes into automated powerhouses.
                    </p>
                </div>
            </div>
        </section>
    );
}
