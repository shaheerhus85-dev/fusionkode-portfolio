'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const demos = [
    { title: "Intelligent Lead Qualifier", category: "AI AGENT", desc: "RAG-based AI Agent trained on internal documentation to handle lead qualification 24/7.", label: "Prototype / Internal Build", tools: "OpenAI, Pinecone, LangChain", result: "70% reduction in manual support load" },
    { title: "Content Velocity Engine", category: "AUTOMATION", desc: "Automated pipeline from Notion to LinkedIn/X/Web via AI formatting.", label: "Demo System", tools: "Make.com, GPT-4o, Airtable", result: "5h manual work -> 10 mins" },
    { title: "Neural SEO Auditor", category: "SEO SYSTEM", desc: "Automated script that maps competitor content against target intent via gap analysis.", label: "Internal Build", tools: "Python, GSC API", result: "40% higher ranking probability" },
    { title: "Automated Data Engine", category: "INFRASTRUCTURE", desc: "Scalable data processing pipeline for real-time analytics and decision making.", label: "Core System", tools: "Node.js, PostgreSQL", result: "Eliminated data fragmentation" }
];

export default function WorkDemos() {
    const containerRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".demo-card", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", stagger: 0.2, scrollTrigger: { trigger: containerRef.current, start: "top 80%" } });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="builds" className="relative w-full py-24 md:py-48 bg-[#0a0a0c] px-6 md:px-12 flex flex-col items-center overflow-hidden">
            {/* DEPTH GLOW */}
            <div className="absolute inset-0 depth-glow-violet pointer-events-none opacity-10" />

            <div className="w-full max-w-[1320px] relative z-10">
                <div className="mb-24 flex items-center justify-between">
                    <div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-violet/40">[ THE DEPLOYMENTS ]</span>
                        <h3 className="font-display font-black uppercase tracking-tighter text-white mt-4 leading-none" style={{ fontSize: 'var(--font-size-h2)' }}>CORE SYSTEMS.</h3>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {demos.map((demo, i) => (
                        <div key={i} className="demo-card magnetic-card group cursor-pointer flex flex-col gap-8 h-full">
                            <div className="relative aspect-[16/10] bg-white/[0.01] border border-white/[0.05] overflow-hidden flex items-center justify-center group-hover:bg-cyan/[0.02] group-hover:border-cyan/20 transition-all duration-700 glass-panel rounded-[2rem]">
                                <div className="absolute top-6 left-6 font-mono text-[9px] text-white/20 uppercase tracking-[0.3em] font-bold">{demo.label}</div>
                                <div className="absolute bottom-6 right-6 font-mono text-[10px] text-cyan drop-shadow-[0_0_10px_rgba(0,242,255,0.4)] uppercase tracking-widest">{demo.result}</div>
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/10 group-hover:text-cyan/30 group-hover:scale-110 transition-all duration-700">SYSTEM_PROTOCOL // 0{i + 1}</span>
                            </div>
                            <div className="flex flex-col gap-4 px-2">
                                <h4 className="font-display text-2xl md:text-4xl font-black uppercase tracking-tight text-white group-hover:text-cyan transition-colors">{demo.title}</h4>
                                <p className="font-sans text-lg text-white/40 leading-relaxed max-w-sm group-hover:text-white/60 transition-colors font-light">{demo.desc}</p>
                                <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">Protocol Infrastructure: <span className="text-white/40">{demo.tools}</span></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
