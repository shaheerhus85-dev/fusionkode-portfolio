'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    const line1Ref = useRef<HTMLDivElement>(null);
    const line2Ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(marqueeRef.current, {
            xPercent: -50,
            duration: 30,
            ease: "none",
            repeat: -1,
            force3D: true,
        });

        const tl = gsap.timeline({ delay: 0.5 });
        const splitLine1 = line1Ref.current?.querySelectorAll('.char');
        const splitLine2 = line2Ref.current?.querySelectorAll('.char');

        tl.fromTo(splitLine1 || [],
            { clipPath: 'inset(0 100% 0 0)', y: 20, opacity: 0 },
            {
                clipPath: 'inset(0 0% 0 0)',
                y: 0,
                opacity: 1,
                stagger: 0.04,
                duration: 1.2,
                ease: "expo.out"
            }
        ).fromTo(splitLine2 || [],
            { clipPath: 'inset(0 100% 0 0)', y: 20, opacity: 0 },
            {
                clipPath: 'inset(0 0% 0 0)',
                y: 0,
                opacity: 1,
                stagger: 0.04,
                duration: 1.2,
                ease: "expo.out"
            },
            "-=0.8"
        );
    }, { scope: containerRef });

    const renderCharacters = (text: string) => {
        return text.split('').map((char, i) => (
            <span key={i} className="char inline-block will-change-transform">
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };

    return (
        <section
            ref={containerRef}
            className="hero-section relative w-full h-[110vh] overflow-hidden grid-background flex items-center justify-center"
        >
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden">
                <div
                    ref={marqueeRef}
                    className="flex whitespace-nowrap will-change-transform opacity-[0.05]"
                    style={{ transform: 'translate3d(0,0,0)' }}
                >
                    <span className="font-display font-black uppercase text-outline px-[5vw]" style={{ fontSize: 'clamp(200px, 30vw, 600px)' }}>FUSIONKODE</span>
                    <span className="font-display font-black uppercase text-outline px-[5vw]" style={{ fontSize: 'clamp(200px, 30vw, 600px)' }}>FUSIONKODE</span>
                </div>
            </div>

            <div className="relative z-10 w-full max-w-[1440px] px-8 md:px-16 flex flex-col items-center text-center">
                <div className="flex flex-col gap-4 md:gap-8">
                    <div ref={line1Ref} className="overflow-hidden">
                        <h2 className="font-mono uppercase tracking-[0.5em] text-white/60 mb-4" style={{ fontSize: 'clamp(18px, 2vw, 28px)' }}>
                            {renderCharacters('AI • WEB • APP • SEO • AI AGENTS')}
                        </h2>
                    </div>
                    <div ref={line2Ref} className="overflow-hidden">
                        <h1 className="font-display font-bold uppercase text-white tracking-tighter leading-[0.85]" style={{ fontSize: 'clamp(48px, 8vw, 140px)' }}>
                            {renderCharacters('BUILDING DIGITAL SYSTEMS')}
                        </h1>
                    </div>
                    <p className="font-sans text-white/40 md:text-xl leading-relaxed mt-4 max-w-2xl mx-auto">
                        Architecting intelligent automation and scalable digital systems that solve complex business problems while you focus on growth.
                    </p>
                    <div className="mt-12 flex justify-center gap-8 md:gap-16">
                        <a href="#contact" className="cta-underline-draw font-mono text-[10px] md:text-[12px] uppercase tracking-[0.3em] text-white group relative py-2">
                            [ Start Your System ]
                            <span className="line absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500" />
                        </a>
                        <a href="#work" className="cta-underline-draw font-mono text-[10px] md:text-[12px] uppercase tracking-[0.3em] text-white group relative py-2">
                            [ View Case Logs ]
                            <span className="line absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
