'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const labExperiments = [
    { phase: "AUTO_1", status: "Live", title: "Autonomous Lead Flow", desc: "Self-optimizing lead qualification systems for high-volume B2B pipelines." },
    { phase: "AGENT_2", status: "Testing", title: "Neural Support Bot", desc: "Cross-platform customer service agent with memory and intent resolution." },
    { phase: "SEO_3", status: "Building", title: "Semantic Growth Engine", desc: "Real-time SEO audit and content generation systems for topical authority." },
    { phase: "WEB_4", status: "Live", title: "High-Velocity Web", desc: "Ultra-fast Next.js deployments with cinematic motion and performance scoring." }
];

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".timeline-item",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0.1, scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="lab" className="relative w-full py-24 bg-[#0A0A0B] border-t border-white/5 flex flex-col items-center overflow-hidden">
            <div className="w-full max-w-[1240px] px-6 md:px-12 relative z-10">
                <div className="mb-16 flex flex-col gap-4 text-center md:text-left">
                    <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-cyan/40">[ FUSIONKODE LAB ]</span>
                    <h3 className="font-display font-black uppercase tracking-tight text-white" style={{ fontSize: 'var(--font-size-h2)' }}>
                        BUILD LOGS.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                    {labExperiments.map((exp, i) => (
                        <div key={i} className="timeline-item magnetic-card glass-panel p-8 rounded-2xl flex flex-col gap-6 hover:border-white/20 transition-all duration-500">
                            <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                <span className="font-mono text-[9px] uppercase tracking-widest text-white/20">{exp.phase}</span>
                                <div className={`flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10`}>
                                    <div className={`w-1.5 h-1.5 rounded-full ${exp.status === 'Live' ? 'bg-emerald-400' :
                                        exp.status === 'Testing' ? 'bg-yellow-400' :
                                            'bg-cyan'
                                        }`} />
                                    <span className="font-mono text-[8px] uppercase tracking-widest text-white/60">{exp.status}</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h4 className="font-display text-xl font-black uppercase text-white">{exp.title}</h4>
                                <p className="font-sans text-white/40 text-sm leading-relaxed">{exp.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
