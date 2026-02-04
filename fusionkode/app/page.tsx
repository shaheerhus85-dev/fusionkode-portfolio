'use client';

import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProblemHook from './components/ProblemHook';
import AIConsultant from './components/AIConsultant';
import Services from './components/Services';
import Timeline from './components/Timeline';
import WorkDemos from './components/WorkDemos';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import FloatingNav from './components/FloatingNav';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (loading) return;

        gsap.registerPlugin(ScrollTrigger);

        const layers = gsap.utils.toArray<HTMLElement>('.section-layer');
        layers.forEach((layer, i) => {
            if (i === 0) return; // Skip the first one

            gsap.fromTo(layer,
                { y: '20vh', opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: layer,
                        start: "top 95%",
                        end: "top 60%",
                        scrub: 1,
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, [loading]);

    return (
        <main className="relative bg-[#0A0A0B] selection:bg-cyan selection:text-black">
            {loading && <Preloader onComplete={() => setLoading(false)} />}

            <Hero />

            <div className="content-wrap relative section-transition">
                <div className="section-layer z-[2]">
                    <AboutSection />
                </div>
                <div className="section-layer z-[3]">
                    <ProblemHook />
                </div>
                <div className="section-layer z-[4]">
                    <AIConsultant />
                </div>
                <div className="section-layer z-[5]">
                    <Services />
                </div>
                <div className="section-layer z-[6]">
                    <Timeline />
                </div>
                <div className="section-layer z-[7]">
                    <WorkDemos />
                </div>
                <div className="section-layer z-[8]">
                    <Philosophy />
                </div>
                <div className="section-layer z-[9]">
                    <Contact />
                </div>

                {/* End of Page CTA Band */}
                <section className="py-24 md:py-48 bg-[#0A0A0B] text-white flex flex-col items-center justify-center text-center px-6 relative overflow-hidden border-t border-white/5">
                    <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
                    <h2 className="font-display font-black uppercase tracking-tighter leading-none mb-12 relative z-10" style={{ fontSize: 'var(--font-size-h2)' }}>
                        READY TO <br /> <span className="text-cyan drop-shadow-[0_0_15px_rgba(0,242,255,0.3)]">AUTOMATE?</span>
                    </h2>
                    <div className="premium-glow rounded-full relative z-10">
                        <a href="#contact" className="btn-premium py-6 px-12 bg-white text-black hover:bg-cyan hover:text-black transition-all">
                            Start Your AI System
                        </a>
                    </div>
                </section>

                {/* Footer Log Refinement */}
                <footer className="py-12 bg-black flex flex-col items-center gap-6 border-t border-white/5">
                    <div className="flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_8px_rgba(0,242,255,0.4)]" />
                        <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/20">FusionKode Architectural Systems // DEPLOYED</p>
                    </div>
                </footer>
            </div>

            {/* Floating Conversion Layer */}
            <div className={`fixed bottom-8 left-8 z-[100] transition-all duration-1000 ${loading ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
                <div className="premium-glow rounded-full">
                    <a
                        href="https://wa.me/923390140860"
                        className="glass-pill px-6 py-3 flex items-center gap-3 border-white/5 bg-white/5 hover:bg-white/10 transition-all group shadow-2xl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)] group-hover:animate-ping" />
                        <span className="font-mono text-[10px] uppercase tracking-widest text-white/60 group-hover:text-white">WhatsApp</span>
                    </a>
                </div>
            </div>

            <div className={`fixed bottom-8 right-8 z-[100] transition-all duration-1000 delay-100 ${loading ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0 hidden md:block'}`}>
                <div className="premium-glow rounded-full">
                    <a
                        href="#contact"
                        className="btn-premium py-3 px-6 text-[10px] bg-cyan/10 border-cyan/20 text-cyan shadow-[0_0_30px_rgba(0,242,255,0.1)] hover:shadow-[0_0_40px_rgba(0,242,255,0.2)]"
                    >
                        Talk to AI
                    </a>
                </div>
            </div>

            {/* Sticky Mobile CTA Bar */}
            <div className={`fixed bottom-0 left-0 w-full z-[100] p-4 bg-black/80 backdrop-blur-xl border-t border-white/10 md:hidden transition-transform duration-500 ${loading ? 'translate-y-full' : 'translate-y-0'}`}>
                <div className="flex gap-4">
                    <a href="https://wa.me/923390140860" className="flex-1 py-4 bg-white/5 border border-white/10 rounded-xl font-mono text-[10px] uppercase tracking-widest text-white text-center">
                        WhatsApp
                    </a>
                    <a href="#contact" className="flex-[2] py-4 bg-cyan text-black rounded-xl font-mono text-[10px] uppercase tracking-widest text-center font-bold shadow-[0_0_20px_rgba(0,242,255,0.3)]">
                        Initialize System
                    </a>
                </div>
            </div>

            <FloatingNav />
        </main>
    );
}
