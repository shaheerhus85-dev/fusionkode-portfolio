'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(contentRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: contentRef.current, start: "top 85%", toggleActions: "play none none reverse" } });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="philosophy" className="relative w-full py-24 md:py-48 bg-[#000000] px-6 md:px-12 flex flex-col items-center text-center">
            <div ref={contentRef} className="max-w-4xl">
                <span className="font-mono text-[12px] uppercase tracking-[0.4em] text-white/40">[ THE CORE PHYLOSOPHY ]</span>
                <h3 className="font-display font-bold uppercase tracking-tighter text-white mt-8 leading-[0.9]" style={{ fontSize: 'clamp(32px, 7vw, 100px)' }}>TRUTH IN <br /> ENGINEERING.</h3>
                <p className="font-sans text-white/40 text-xl md:text-2xl leading-relaxed mt-12 italic">"Abstraction is the enemy of performance. We build systems that are as transparent as they are powerful."</p>
            </div>
        </section>
    );
}
