'use client';

import { useState, useEffect } from 'react';

const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Contact', href: '#contact' },
];

export default function FloatingNav() {
    return (
        <div className="nav-wrap fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-fit px-4 pointer-events-auto">
            <nav className="glass-panel rounded-full px-6 py-3 flex items-center gap-8 md:gap-12 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_8px_rgba(0,242,255,0.4)]" />
                    <span className="font-display font-black uppercase tracking-tighter text-sm md:text-base">FUSIONKODE</span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {[
                        { name: 'Services', href: '#services' },
                        { name: 'Builds', href: '#builds' },
                        { name: 'Lab', href: '#lab' },
                        { name: 'Contact', href: '#contact' },
                    ].map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="font-mono text-[10px] uppercase tracking-widest text-white/50 hover:text-cyan transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <a href="#contact" className="px-5 py-2 bg-white/5 border border-white/10 rounded-full font-mono text-[9px] uppercase tracking-widest text-white hover:bg-cyan hover:text-black transition-all">
                    Initialize
                </a>
            </nav>
        </div>
    );
}
