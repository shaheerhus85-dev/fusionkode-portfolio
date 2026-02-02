'use client';

import { useState, useEffect } from 'react';

const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Contact', href: '#contact' },
];

export default function FloatingNav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-6">
            <nav className="glass-pill px-8 py-4 flex items-center gap-8 md:gap-12">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="cta-underline-draw font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors duration-300 relative group py-1"
                    >
                        {item.name}
                        <span className="line absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500" />
                    </a>
                ))}

                {/* Status Dot */}
                <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 hidden md:block">LIVE</span>
                </div>
            </nav>
        </div>
    );
}
