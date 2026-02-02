'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const services = [
    { id: "01", title: "AI Automation Systems", desc: "Replacing manual grunt work with self-correcting AI logic to 10x your operational speed." },
    { id: "02", title: "AI Agents & Chatbots", desc: "Custom-trained neural assistants that handle lead qualification and support 24/7." },
    { id: "03", title: "Web & App Development", desc: "High-performance, motion-driven platforms built with Next.js for elite digital presence." },
    { id: "04", title: "SEO & Growth Systems", desc: "Data-driven visibility strategies that turn search intent into predictable revenue." },
    { id: "05", title: "Workflow Automation", desc: "Connecting your tech stack into a single, cohesive engine using smart API integrations." },
    { id: "06", title: "System Consulting", desc: "Strategic mapping of AI integration for legacy and new businesses." }
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || !glowRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        gsap.to(glowRef.current, { x, y, duration: 0.2, ease: "power2.out" });
    };

    useGSAP(() => {
        gsap.fromTo(cardRef.current,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, { scope: cardRef });

    return (
        <div ref={cardRef} onMouseMove={handleMouseMove} className="service-card glass-panel group relative p-10 md:p-12 overflow-hidden flex flex-col gap-10 cursor-pointer will-change-transform h-full">
            <div ref={glowRef} className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" style={{ background: 'radial-gradient(400px circle at 0px 0px, rgba(255,255,255,0.08), transparent 80%)', transform: 'translate(-50%, -50%)' }} />
            <div className="relative z-20 flex flex-col gap-10">
                <span className="font-mono text-[11px] text-white/20 group-hover:text-white/60 transition-colors uppercase tracking-widest">{service.id} // SYSTEM</span>
                <div className="flex flex-col gap-4">
                    <h4 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white leading-tight">{service.title}</h4>
                    <p className="font-sans text-sm md:text-base text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{service.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default function Services() {
    return (
        <section id="services" className="relative w-full py-24 md:py-48 bg-[#000000] px-6 md:px-12 flex flex-col items-center">
            <div className="w-full max-w-[1320px]">
                <div className="mb-24 flex flex-col gap-8 text-center md:text-left">
                    <span className="font-mono text-[12px] uppercase tracking-[0.5em] text-white/40">[ THE CAPABILITY LOGS ]</span>
                    <h3 className="font-display font-bold uppercase tracking-tighter text-white leading-[0.9]" style={{ fontSize: 'clamp(32px, 6vw, 100px)' }}>ENGINEERING <br /> THE FUTURE.</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, i) => <ServiceCard key={i} service={service} index={i} />)}
                </div>
            </div>
        </section>
    );
}
