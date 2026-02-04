'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const services = [
    { title: "AI Automation Agency", desc: "End-to-end systems architecture that replaces manual overhead with autonomous neural logic.", icon: "⚙️" },
    { title: "AI Agents Development", desc: "Custom RAG-based agents (like NEXA) built for complex customer support and sales workflows.", icon: "🤖" },
    { title: "Systems Studio", desc: "Architecting high-performance digital infrastructure with cinematic motion and conversion-first UI.", icon: "🚀" },
    { title: "Neural SEO Engines", desc: "Intelligent content velocity systems designed to dominate topical authority at scale.", icon: "🧠" }
];

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".service-card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: { trigger: containerRef.current, start: "top 70%" }
            }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="services" className="relative w-full py-24 md:py-48 flex flex-col items-center justify-center overflow-hidden">
            <div className="w-full max-w-[1440px] px-6 md:px-12 relative z-10">
                <div className="mb-24 flex flex-col gap-6 text-center md:text-left">
                    <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-cyan/40">[ THE CAPABILITY MATRIX ]</span>
                    <h3 className="font-display font-black uppercase tracking-tighter text-white leading-none" style={{ fontSize: 'var(--font-size-h2)' }}>
                        ENGINEERING <br />
                        SYSTEMS.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {services.map((service, i) => (
                        <div key={i} className="service-card magnetic-card glass-panel rounded-[2rem] p-12 md:p-16 group hover:border-cyan/30 transition-all duration-700">
                            <div className="flex flex-col gap-10">
                                <div className="p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-cyan/10 transition-colors duration-500">
                                    <span className="text-5xl group-hover:scale-110 transition-transform duration-500 block w-fit drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">{service.icon}</span>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <h4 className="font-display text-3xl md:text-4xl font-black uppercase text-white group-hover:text-cyan transition-colors">{service.title}</h4>
                                    <p className="font-sans text-white/40 leading-relaxed text-xl font-light group-hover:text-white/60 transition-colors">{service.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
