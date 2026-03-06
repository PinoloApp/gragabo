const fs = require('fs');

const inputPath = 'Terms&Conditions.text';
const outputPath = 'src/components/ui/TermsAndConditionsPage.jsx';

const text = fs.readFileSync(inputPath, 'utf8');

// The text structure:
// Blank lines separate paragraphs.
// Many sections start with numbers (e.g. "1. Definitions and Interpretation")
// Subsections like "1.1 Definitions" or just headings like "Corporate Status and Strategic Context"

const paragraphs = text.split(/\n\s*\n/);

let jsxStr = `
"use client";

import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Footer } from '@/components/ui/Footer';
import './GragaboNetworkPage.css';

gsap.registerPlugin(ScrollTrigger);

function AnimatedSection({ className, children, from = { opacity: 0, y: 50 }, start = 'top 75%' }) {
    const ref = useRef(null);
    useGSAP(() => {
        const toValues = Object.fromEntries(
            Object.keys(from).map((k) => {
                if (k === 'opacity' || k === 'scale') return [k, 1];
                return [k, 0];
            })
        );
        gsap.fromTo(ref.current, from, {
            ...toValues,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: ref.current, start },
        });
    }, []);
    return (
        <div ref={ref} className={className} style={{ opacity: 0 }}>
            {children}
        </div>
    );
}

export function TermsAndConditionsPage() {
    const heroRef = useRef(null);
    const taglineRef = useRef(null);

    useGSAP(() => {
        // Hero entrance
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.fromTo(taglineRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2 }, 0.3);
    }, []);

    return (
        <div className="gn-page">
            <section ref={heroRef} className="gn-hero" style={{ minHeight: '60vh' }}>
                <div className="gn-hero-content">
                    <p className="gn-eyebrow">Legal Information</p>
                    <h1 ref={taglineRef} className="gn-tagline" style={{ fontSize: '4rem'}}>
                        Terms and<br /> <span className="gn-gold">Conditions</span>
                    </h1>
                </div>
            </section>
`;

// Helper rules to determine if a block of text is a Section Head / Sub Head
function isHeading(p) {
    if (p.length > 150) return false;
    // Section start: "1. Definitions" etc...
    if (/^\d+\.\s/.test(p)) return true;
    // Sub-section start: "1.1 Definitions"
    if (/^\d+\.\d+\s/.test(p)) return true;
    // Uppercase or Title Case words without ending punctuation
    if (!/[.!?]$/.test(p)) return true;
    return false;
}

let currentSectionIsOpen = false;

function closeSection() {
    if (currentSectionIsOpen) {
        jsxStr += `
                </div>
            </section>
`;
        currentSectionIsOpen = false;
    }
}

function openSection(headingText) {
    closeSection();
    // Escape quotes and xml chars inside headingText
    const safeText = headingText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
    
    jsxStr += `
            <section className="gn-content-section" style={{ minHeight: 'auto', padding: '60px 0' }}>
                <div className="gn-divider-label">
                    <span className="gn-gold" style={{ fontSize: '1.5rem', fontWeight: 600 }}>${safeText}</span>
                </div>
                <div className="gn-content-grid">
`;
    currentSectionIsOpen = true;
}

paragraphs.forEach((p) => {
    let clean = p.trim();
    if (!clean) return;

    if (isHeading(clean)) {
        openSection(clean);
    } else {
        if (!currentSectionIsOpen) {
            // Un-headed text at the very top
            openSection("Introduction");
        }
        const safeText = clean.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        jsxStr += `
                    <AnimatedSection className="gn-content-body" from={{ opacity: 0, y: 30 }} start="top 85%">
                        <p>${safeText}</p>
                    </AnimatedSection>
`;
    }
});

closeSection();

jsxStr += `
            <Footer />
        </div>
    );
}

export default TermsAndConditionsPage;
`;

fs.writeFileSync(outputPath, jsxStr, 'utf8');
console.log('Generated Terms And Conditions JSX correctly.');
