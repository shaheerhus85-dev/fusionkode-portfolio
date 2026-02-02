'use client';

import { ReactLenis } from 'lenis/react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactNode } from 'react'; // Keep ReactNode import if React.ReactNode is not used, or remove if React.ReactNode is preferred. The edit uses React.ReactNode in the prop type.

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Ensure ScrollTrigger is aware of Lenis updates
        ScrollTrigger.refresh();
    }, []);

    return (
        <ReactLenis root options={{
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        }}>
            {children}
        </ReactLenis>
    );
}
