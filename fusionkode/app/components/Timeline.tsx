'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const steps = ["Discover", "Plan", "Build", "Optimize", "Automate"];

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Progress Line Reveal
        gsap.fromTo(lineRef.current, { scaleX: 0 }, {
            scaleX: 1,
            scrollTrigger: {
                trigger: lineRef.current,
                start: "top 90%",
                end: "bottom 30%",
                scrub: 1,
            },
            transformOrigin: "left center",
            ease: "none"
        });

        const items = containerRef.current?.querySelectorAll('.timeline-item');
        items?.forEach((item) => {
            gsap.fromTo(item,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative w-full py-24 md:py-32 bg-[#0A0A0A] px-6 md:px-12 overflow-hidden flex flex-col items-center"
        >
            <div className="w-full max-w-[1320px]">
                <div className="mb-24 text-center md:text-left">
                    <span className="font-mono text-[12px] uppercase tracking-[0.4em] text-white/40">[ THE ARCHITECT'S WORKFLOW ]</span>
                    <h3 className="font-display font-bold uppercase tracking-tighter text-white mt-4" style={{ fontSize: 'clamp(32px, 5vw, 80px)' }}>PRECISION IN <br />EXECUTION.</h3>
                </div>

                <div className="relative pt-10">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-white/[0.05] hidden md:block" />
                    <div
                        ref={lineRef}
                        className="absolute top-0 left-0 w-full h-[2px] bg-cyan hidden md:block"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:pt-16">
                        {steps.map((step, i) => (
                            <div key={i} className="timeline-item flex flex-col gap-6 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-4">
                                    <span className="font-mono text-[10px] text-cyan">[ 0{i + 1} ]</span>
                                    <div className="h-[1px] flex-grow bg-white/5 md:hidden" />
                                </div>
                                <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-white">{step}</h4>
                                <p className="font-sans text-sm text-white/40 leading-relaxed uppercase tracking-wider">
                                    {i === 0 && "In-depth audit of logic & infrastructure."}
                                    {i === 1 && "Strategic mapping of AI-core systems."}
                                    {i === 2 && "Precision engineering of the final logic."}
                                    {i === 3 && "Optimization for performance & scale."}
                                    {i === 4 && "Deployment of autonomous agents."}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
