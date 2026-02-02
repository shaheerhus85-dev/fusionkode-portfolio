'use client';

import { useState, useEffect } from 'react';
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

    return (
        <main className="relative bg-black selection:bg-white selection:text-black">
            {loading && <Preloader onComplete={() => setLoading(false)} />}

            {/* Sticky Hero Container */}
            <div className="hero-container relative">
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    <Hero />
                </div>
            </div>

            {/* Covering Sections */}
            <div className="content-wrap relative z-20">
                <AboutSection />
                <ProblemHook />
                <AIConsultant />
                <Services />
                <Timeline />
                <WorkDemos />
                <Philosophy />
                <Contact />

                {/* End of Page CTA Band */}
                <section className="py-24 md:py-48 bg-white text-black flex flex-col items-center justify-center text-center px-6">
                    <h2 className="font-display font-bold uppercase tracking-tighter leading-none mb-12" style={{ fontSize: 'clamp(40px, 8vw, 120px)' }}>
                        READY TO <br /> AUTOMATE?
                    </h2>
                    <a href="#contact" className="px-12 py-6 bg-black text-white font-mono text-sm uppercase tracking-[0.4em] hover:bg-black/90 transition-all flex items-center gap-4 group">
                        Start Your AI System
                        <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </a>
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
            <div className={`fixed bottom-10 left-10 z-[100] transition-opacity duration-500 ${loading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <a
                    href="https://wa.me/923390140860"
                    className="flex items-center justify-center h-12 w-12 bg-black/50 backdrop-blur-md border border-white/10 rounded-full hover:border-cyan/50 hover:bg-black/80 transition-all group"
                    title="WhatsApp Support"
                >
                    <span className="font-mono text-xs text-white/40 group-hover:text-cyan transition-colors">WA</span>
                </a>
            </div>

            <div className={`fixed bottom-10 right-10 z-[100] transition-opacity duration-500 ${loading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <a
                    href="#contact"
                    className="px-6 py-3 bg-white text-black font-mono text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-cyan hover:text-white transition-all shadow-xl"
                >
                    <div className="h-2 w-2 rounded-full bg-cyan group-hover:bg-white animate-pulse" />
                    Talk to AI Consultant
                </a>
            </div>

            <FloatingNav />
        </main>
    );
}
