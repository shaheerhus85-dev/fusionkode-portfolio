'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const demos = [
    {
        title: "Intelligent Lead Qualifier",
        category: "AI AGENT",
        desc: "RAG-based AI Agent trained on internal documentation to handle lead qualification 24/7.",
        label: "Prototype / Internal Build",
        tools: "OpenAI, Pinecone, LangChain",
        result: "70% reduction in manual support load"
    },
    {
        title: "Content Velocity Engine",
        category: "AUTOMATION",
        desc: "Automated pipeline from Notion to LinkedIn/X/Web via AI formatting.",
        label: "Demo System",
        tools: "Make.com, GPT-4o, Airtable",
        result: "5h manual work -> 10 mins"
    },
    {
        title: "Neural SEO Auditor",
        category: "SEO SYSTEM",
        desc: "Automated script that maps competitor content against target intent via gap analysis.",
        label: "Internal Build",
        tools: "Python, GSC API",
        result: "40% higher ranking probability"
    },
    {
        title: "Automated Data Engine",
        category: "INFRASTRUCTURE",
        desc: "Scalable data processing pipeline for real-time analytics and decision making.",
        label: "Core System",
        tools: "Node.js, PostgreSQL",
        result: "Eliminated data fragmentation"
    }
];

export default function WorkDemos() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const items = containerRef.current?.querySelectorAll('.demo-card');
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
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12 text-center md:text-left">
                    <div className="flex flex-col gap-6">
                        <span className="font-mono text-[12px] uppercase tracking-[0.4em] text-white/40">[ RECENT DEPLOYMENTS ]</span>
                        <h3 className="font-display font-bold uppercase tracking-tighter text-white leading-none" style={{ fontSize: 'clamp(32px, 5vw, 80px)' }}>TECHNICAL <br />BENCHMARKS.</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {demos.map((demo, i) => (
                        <div
                            key={i}
                            className="demo-card group cursor-pointer flex flex-col gap-8 h-full"
                        >
                            <div className="relative aspect-[16/10] bg-white/[0.02] border border-white/[0.05] overflow-hidden flex items-center justify-center group-hover:bg-white/[0.04] transition-all duration-700 glass-panel">
                                <div className="absolute inset-0 opacity-10 mix-blend-overlay noise-overlay" />
                                <div className="absolute top-4 left-4 font-mono text-[9px] text-white/20 uppercase tracking-widest">{demo.label}</div>
                                <div className="absolute bottom-4 right-4 font-mono text-[9px] text-cyan/40 uppercase tracking-widest">{demo.result}</div>
                                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/10 group-hover:text-white/30 transition-colors">SYSTEM DEPLOYMENT // 0{i + 1}</span>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <span className="font-mono text-[10px] text-cyan">[ {demo.category} ]</span>
                                    <div className="h-[1px] flex-grow bg-white/5" />
                                </div>
                                <h4 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">{demo.title}</h4>
                                <p className="font-sans text-sm text-white/40 leading-relaxed max-w-sm group-hover:text-white/60 transition-colors">
                                    {demo.desc}
                                </p>
                                <div className="mt-2 font-mono text-[9px] uppercase tracking-widest text-white/20">
                                    Tools: {demo.tools}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
