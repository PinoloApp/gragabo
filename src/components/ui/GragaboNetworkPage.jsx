'use client';

import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Footer } from '@/components/ui/Footer';
import './GragaboNetworkPage.css';

gsap.registerPlugin(ScrollTrigger);

const NODES = [
    { id: 'bsg', label: 'Business, Strategy\n& Governance', href: '/mainScene', x: 50, y: 20 },
    { id: 'flc', label: 'Finance, Legal\n& Capital', href: '/financeScene', x: 22, y: 38 },
    { id: 'tlis', label: 'Trade, Logistics\n& Industrial', href: '/tradeScene', x: 50, y: 58 },
    { id: 'tdis', label: 'Technology, Design\n& Impact', href: '/technologyScene', x: 78, y: 38 },
    { id: 'core', label: 'The Gragabo\nNetwork', href: null, x: 50, y: 38 },
];

const EDGES = [
    ['core', 'bsg'],
    ['core', 'flc'],
    ['core', 'tlis'],
    ['core', 'tdis'],
    ['bsg', 'flc'],
    ['flc', 'tlis'],
    ['tlis', 'tdis'],
    ['tdis', 'bsg'],
];

const VALUES = [
    'Integrity in decision making',
    'Accountability in execution',
    'Confidentiality in cooperation',
    'Precision in delivery',
    'Commitment to long-term impact',
];

const SYSTEM_ITEMS = [
    'Strategic expertise',
    'Operational capability',
    'Legal and financial discipline',
    'Technological competence',
    'Ethical governance',
];

const IMPACT_ITEMS = [
    'Responsible leadership',
    'Transparent governance',
    'Fair commercial practices',
    'Sustainable development',
    'Knowledge sharing',
    'Community engagement',
];

function AnimatedSection({ className, children, from = { opacity: 0, y: 50 }, start = 'top 75%' }) {
    const ref = useRef(null);
    useGSAP(() => {
        const toValues = Object.fromEntries(
            Object.keys(from).map(k => {
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
    return <div ref={ref} className={className} style={{ opacity: 0 }}>{children}</div>;
}

function NetworkCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let width, height, particles, animId;

        function init() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            particles = Array.from({ length: 80 }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                r: Math.random() * 2 + 1,
            }));
        }

        function draw() {
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.strokeStyle = `rgba(180, 140, 60, ${(1 - dist / 120) * 0.8})`;
                        ctx.lineWidth = 1.2;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r + 0.8, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(180, 140, 60, 0.95)';
                ctx.fill();
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;
            });
            animId = requestAnimationFrame(draw);
        }

        init(); draw();
        window.addEventListener('resize', init);
        return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', init); };
    }, []);

    return <canvas ref={canvasRef} className="gn-canvas" />;
}

export default function GragaboNetworkPage() {
    const heroRef = useRef(null);
    const taglineRef = useRef(null);
    const subtitleRef = useRef(null);
    const scrollHintRef = useRef(null);
    const diagramRef = useRef(null);

    // Staggered list refs
    const valueItems = useRef([]);
    const systemItems = useRef([]);
    const impactItems = useRef([]);
    const quietLines = useRef([]);

    useGSAP(() => {
        // ── Hero entrance ──────────────────────────────
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.fromTo(taglineRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2 }, 0.3)
            .fromTo(subtitleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, 0.8)
            .fromTo(scrollHintRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, 1.4);

        // ── Network diagram ─────────────────────────────
        gsap.fromTo(diagramRef.current,
            { opacity: 0, scale: 0.85 },
            {
                opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: diagramRef.current, start: 'top 75%' }
            }
        );

        // ── Values list ─────────────────────────────────
        gsap.fromTo(valueItems.current,
            { opacity: 0, x: -40 },
            {
                opacity: 1, x: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
                scrollTrigger: { trigger: valueItems.current[0], start: 'top 78%' }
            }
        );

        // ── "Working Quietly" lines ─────────────────────
        gsap.fromTo(quietLines.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0, duration: 0.65, stagger: 0.18, ease: 'power2.out',
                scrollTrigger: { trigger: quietLines.current[0], start: 'top 78%' }
            }
        );

        // ── System items ─────────────────────────────────
        gsap.fromTo(systemItems.current,
            { opacity: 0, x: -40 },
            {
                opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
                scrollTrigger: { trigger: systemItems.current[0], start: 'top 80%' }
            }
        );

        // ── Impact items ─────────────────────────────────
        gsap.fromTo(impactItems.current,
            { opacity: 0, x: -40 },
            {
                opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
                scrollTrigger: { trigger: impactItems.current[0], start: 'top 80%' }
            }
        );

    }, []);

    return (
        <div className="gn-page">

            {/* ══════════════════════════════════════════════
                SECTION 1 — HERO  (DO NOT TOUCH)
            ══════════════════════════════════════════════ */}
            <section ref={heroRef} className="gn-hero">
                <NetworkCanvas />
                <div className="gn-hero-content">
                    <p className="gn-eyebrow">The Gragabo Network</p>
                    <h1 ref={taglineRef} className="gn-tagline">
                        One network.<br />Infinite <span className="gn-gold">potential</span>.
                    </h1>
                    <p ref={subtitleRef} className="gn-subtitle">
                        A global alliance of professionals, entrepreneurs, specialists, and partners
                        who share a common belief: that business can and must contribute to a better,
                        more responsible world.
                    </p>
                </div>
                <div ref={scrollHintRef} className="gn-scroll-hint">
                    <span>Discover the Network</span>
                    <div className="gn-scroll-line" />
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                SECTION 2 — NETWORK DIAGRAM  (DO NOT TOUCH)
            ══════════════════════════════════════════════ */}
            <section className="gn-diagram-section">
                <div ref={diagramRef} className="gn-diagram">
                    {EDGES.map(([a, b], i) => {
                        const na = NODES.find(n => n.id === a);
                        const nb = NODES.find(n => n.id === b);
                        return (
                            <svg key={i} className="gn-edge-svg" viewBox="0 0 100 80" preserveAspectRatio="none">
                                <line x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                                    stroke="rgba(203,163,84,0.35)" strokeWidth="0.5" strokeDasharray="3,3" />
                            </svg>
                        );
                    })}
                    {NODES.map(node => (
                        <div key={node.id}
                            className={`gn-node ${node.id === 'core' ? 'gn-node--core' : ''}`}
                            style={{ left: `${node.x}%`, top: `${node.y}%` }}>
                            {node.href ? (
                                <a href={node.href} className="gn-node-inner">
                                    <div className="gn-node-dot" />
                                    <div className="gn-node-label">{node.label}</div>
                                </a>
                            ) : (
                                <div className="gn-node-inner gn-node-inner--no-link">
                                    <div className="gn-node-dot" />
                                    <div className="gn-node-label">{node.label}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                SECTION 3 — WHO WE ARE
            ══════════════════════════════════════════════ */}
            <section className="gn-content-section gn-who">
                <div className="gn-divider-label">
                    <span className="gn-gold">Who We Are</span>
                </div>
                <div className="gn-content-grid">
                    <AnimatedSection className="gn-content-body" from={{ opacity: 0, y: 40 }}>
                        <p className="gn-lead">
                            Gragabo is more than a company.
                        </p>
                        <p>
                            It is a global alliance of professionals, entrepreneurs, specialists, and partners
                            who share a common belief: that business can and must contribute to a better,
                            more responsible world.
                        </p>
                        <p>
                            For more than a decade, we have supported individuals and organizations in solving
                            complex challenges through clarity, disciplined strategy, and decisive action.
                        </p>
                        <p>
                            Behind every engagement stands an international network of over{' '}
                            <strong className="gn-gold">3,500 affiliated professionals</strong> and collaborators
                            operating across multiple industries and regions.
                        </p>
                        <p>
                            This network is united by a shared commitment to fundamental values:
                            truth, integrity, accountability, justice, and professional courage.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                SECTION 4 — COMMUNITY OF RESPONSIBILITY
            ══════════════════════════════════════════════ */}
            <section className="gn-content-section gn-community">
                <div className="gn-divider-label">
                    <span className="gn-gold">A Community of Responsibility</span>
                </div>
                <div className="gn-content-grid">
                    <AnimatedSection className="gn-content-body" from={{ opacity: 0, y: 40 }}>
                        <p className="gn-lead">
                            Gragabo's network is not built on hierarchy or promotion.
                        </p>
                        <p>It is built on <strong className="gn-gold">responsibility</strong>.</p>
                        <p>
                            Each member is selected based on demonstrated competence, ethical standards,
                            and long-term commitment to professional excellence.
                        </p>
                        <p>
                            Our collaborators include strategists, engineers, legal advisors, financial
                            specialists, operational leaders, technologists, and industry experts who
                            contribute their knowledge and experience to complex client engagements.
                        </p>
                        <p className="gn-values-intro">Every participant operates under a clear professional code, emphasizing:</p>
                    </AnimatedSection>
                    <div className="gn-values-list">
                        {VALUES.map((v, i) => (
                            <div
                                key={i}
                                ref={el => { valueItems.current[i] = el; }}
                                className="gn-value-item"
                                style={{ opacity: 0 }}
                            >
                                <span className="gn-value-bullet" />
                                <span>{v}</span>
                            </div>
                        ))}
                        <AnimatedSection className="gn-tagline-small" from={{ opacity: 0, y: 20 }}>
                            This shared discipline ensures consistency, reliability, and trust across all engagements.
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                SECTION 5 — WORKING QUIETLY
            ══════════════════════════════════════════════ */}
            <section className="gn-quiet-section">
                <div className="gn-quiet-inner">
                    <AnimatedSection className="gn-quiet-header" from={{ opacity: 0, y: 40 }}>
                        <h2 className="gn-section-title">Working Quietly,<br /><span className="gn-gold">Delivering Consistently</span></h2>
                    </AnimatedSection>

                    <div className="gn-quiet-body">
                        <AnimatedSection from={{ opacity: 0, y: 30 }}>
                            <p>For many years, Gragabo operated primarily behind the scenes.</p>
                            <p>
                                We supported companies, founders, and institutions without public visibility,
                                focusing on results rather than recognition.
                            </p>
                            <p>
                                Our priority has always been effectiveness over publicity, substance over
                                presentation, and long-term value over short-term exposure.
                            </p>
                            <p>
                                As global business environments became increasingly characterized by uncertainty,
                                misinformation, and superficial solutions, the need for structured, credible,
                                and responsible advisory support became more visible.
                            </p>
                            <p>In response, Gragabo chose to engage more openly.</p>
                        </AnimatedSection>

                        <div className="gn-quiet-mantra">
                            {[
                                'Not for visibility.',
                                'Not for prestige.',
                                'Not for promotion.',
                            ].map((line, i) => (
                                <p
                                    key={i}
                                    ref={el => { quietLines.current[i] = el; }}
                                    className="gn-mantra-line"
                                    style={{ opacity: 0 }}
                                >
                                    {line}
                                </p>
                            ))}
                            <AnimatedSection className="gn-mantra-conclusion" from={{ opacity: 0, y: 20 }}>
                                But to ensure that serious organizations have access to competent, principled,
                                and accountable partners.
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
                <div className="gn-quiet-glow" />
            </section>

            {/* ══════════════════════════════════════════════
                SECTION 6 — FROM ORGANIZATION TO INSTITUTION
            ══════════════════════════════════════════════ */}
            <section className="gn-content-section">
                <div className="gn-divider-label">
                    <span className="gn-gold">From Organization to Institution</span>
                </div>
                <div className="gn-content-grid">
                    <AnimatedSection className="gn-content-body" from={{ opacity: 0, y: 40 }}>
                        <p className="gn-lead">Today, Gragabo represents more than an advisory firm.</p>
                        <p>
                            It represents a structured international platform for cooperation, development,
                            and institutional growth.
                        </p>
                        <p>Our network functions as an integrated system that combines:</p>
                    </AnimatedSection>
                    <div className="gn-system-grid">
                        {SYSTEM_ITEMS.map((item, i) => (
                            <div
                                key={i}
                                ref={el => { systemItems.current[i] = el; }}
                                className="gn-system-card"
                                style={{ opacity: 0 }}
                            >
                                <div className="gn-system-dot" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <AnimatedSection className="gn-content-body" from={{ opacity: 0, y: 30 }}>
                        <p>
                            This structure enables us to support organizations at every stage of development,
                            from early growth to international expansion and institutional maturity.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                SECTION 7 — COMMITMENT TO IMPACT
            ══════════════════════════════════════════════ */}
            <section className="gn-content-section gn-impact">
                <div className="gn-divider-label">
                    <span className="gn-gold">Our Commitment to Impact</span>
                </div>
                <div className="gn-content-grid">
                    <AnimatedSection className="gn-content-body" from={{ opacity: 0, y: 40 }}>
                        <p className="gn-lead">Gragabo's mission extends beyond commercial success.</p>
                        <p>
                            We believe that sustainable business growth must be aligned with social
                            responsibility, ethical conduct, and positive long-term impact.
                        </p>
                        <p>Our network actively promotes:</p>
                    </AnimatedSection>
                    <div className="gn-impact-list">
                        {IMPACT_ITEMS.map((item, i) => (
                            <div
                                key={i}
                                ref={el => { impactItems.current[i] = el; }}
                                className="gn-value-item"
                                style={{ opacity: 0 }}
                            >
                                <span className="gn-value-bullet" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <AnimatedSection className="gn-content-body" from={{ opacity: 0, y: 30 }}>
                        <p>
                            Through this approach, we contribute not only to organizational performance
                            but also to broader economic and social stability.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                SECTION 8 — WELCOME
            ══════════════════════════════════════════════ */}
            <section className="gn-welcome-section">
                <div className="gn-welcome-inner">
                    <AnimatedSection from={{ opacity: 0, y: 50 }}>
                        <h2 className="gn-section-title gn-center">
                            Welcome to the<br /><span className="gn-gold">Gragabo Network</span>
                        </h2>
                    </AnimatedSection>
                    <AnimatedSection className="gn-welcome-body" from={{ opacity: 0, y: 30 }}>
                        <p>
                            Gragabo is a platform for individuals and organizations that value substance
                            over appearances, discipline over improvisation, and integrity over convenience.
                        </p>
                        <p>It is a community for those who seek to build enterprises that endure.</p>
                        <p>
                            It is a network for those who understand that true success is measured not only
                            by growth, but by <strong className="gn-gold">responsibility</strong>.
                        </p>
                        <p>We welcome partners, clients, and collaborators who share this vision.</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                SECTION 9 — CTA / BEGIN YOUR ENGAGEMENT
            ══════════════════════════════════════════════ */}
            <section className="gn-cta-section">
                <AnimatedSection from={{ opacity: 0, scale: 0.94, y: 40 }}>
                    <div className="gn-cta-inner">
                        <p className="gn-eyebrow">Begin Your Engagement</p>
                        <h2 className="gn-cta-title">
                            If you seek a long-term partner grounded in competence, integrity, and
                            institutional discipline, Gragabo invites you to begin a structured dialogue.
                        </h2>
                        <div className="gn-cta-buttons">
                            <a href="#" className="gn-btn gn-btn--primary">Schedule a 30-Minute Consultation</a>
                            <a href="#" className="gn-btn gn-btn--secondary">Complete Our Diagnostic Form</a>
                        </div>
                        <div className="gn-cta-branches">
                            <p className="gn-branches-label">Explore our branches</p>
                            <div className="gn-branches-row">
                                <a href="/mainScene" className="gn-branch-link">Business &amp; Governance</a>
                                <a href="/financeScene" className="gn-branch-link">Finance &amp; Capital</a>
                                <a href="/tradeScene" className="gn-branch-link">Trade &amp; Logistics</a>
                                <a href="/technologyScene" className="gn-branch-link">Technology &amp; Design</a>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            {/* ══════════════════════════════════════════════
                SECTION 10 — FINAL NOTE
            ══════════════════════════════════════════════ */}
            <section className="gn-final-section">
                <div className="gn-final-inner">
                    <AnimatedSection from={{ opacity: 0, y: 30 }}>
                        <p className="gn-final-line">Strong organizations are never built in isolation.</p>
                        <p className="gn-final-line">They are built through cooperation, shared values, and disciplined execution.</p>
                        <p className="gn-final-signature">Welcome to Gragabo.</p>
                    </AnimatedSection>
                    <AnimatedSection from={{ opacity: 0 }}>
                        <a href="/" className="gn-btn gn-btn--ghost">← Back to Home</a>
                    </AnimatedSection>
                </div>
            </section>

            <Footer />
        </div>
    );
}
