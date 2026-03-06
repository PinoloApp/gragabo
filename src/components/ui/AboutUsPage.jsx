'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Footer } from '@/components/ui/Footer';
import './AboutUsPage.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsPage() {
    const mainRef = useRef(null);
    const sectionRefs = useRef([]);

    useGSAP(() => {
        sectionRefs.current.forEach((ref, index) => {
            if (ref) {
                const isHero = index === 0;

                if (isHero) {
                    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
                    tl.fromTo(ref.querySelector('.au-linear-eyebrow'),
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 1 }, 0.5)
                        .fromTo(ref.querySelector('.au-linear-title'),
                            { opacity: 0, y: 30 },
                            { opacity: 1, y: 0, duration: 1.2 }, 0.8);
                } else {
                    gsap.fromTo(ref,
                        { opacity: 0, y: 40 },
                        {
                            opacity: 1, y: 0, duration: 1,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: ref,
                                start: 'top 85%',
                                once: true
                            }
                        }
                    );
                }
            }
        });
    }, { scope: mainRef });

    return (
        <div className="au-page" ref={mainRef}>
            {/* Hero Section */}
            <section className="au-linear-hero" ref={el => sectionRefs.current[0] = el}>
                <p className="au-linear-eyebrow">About Gragabo</p>
                <h1 className="au-linear-title">Building Enduring Business Systems for Sustainable Global Growth</h1>
            </section>

            {/* Executive Summary */}
            <section className="au-linear-section" ref={el => sectionRefs.current[1] = el}>
                <h2 className="au-linear-header">Executive Summary</h2>
                <div className="au-linear-body">
                    <p>Gragabo is an independent international business advisory and development organization dedicated to building resilient, scalable, and well-governed enterprises.</p>
                    <p>We support founders, executives, and institutional partners in transforming complex operational environments into structured, transparent, and performance-driven organizations.</p>
                    <p>Our work integrates strategy, operations, finance, governance, technology, and international trade into cohesive systems designed for long-term value creation.</p>
                    <p>Gragabo does not provide generic consulting services.</p>
                    <p>We design, implement, and stabilize business architectures that endure.</p>
                </div>
            </section>

            {/* Our Purpose */}
            <section className="au-linear-section" ref={el => sectionRefs.current[2] = el}>
                <h2 className="au-linear-header">Our Purpose</h2>
                <div className="au-linear-body">
                    <p>Modern businesses operate in an environment defined by rapid change, regulatory complexity, technological disruption, and increasing competitive pressure.</p>
                    <p>In this context, sustainable success is no longer determined by isolated initiatives or short-term optimization.</p>
                    <p>It is determined by the quality of systems that govern decision making, execution, risk management, and growth.</p>
                    <p>Gragabo exists to build those systems.</p>
                    <p>Our purpose is to enable organizations to grow with clarity, discipline, and institutional strength.</p>
                </div>
            </section>

            {/* Our Philosophy */}
            <section className="au-linear-section" ref={el => sectionRefs.current[3] = el}>
                <h2 className="au-linear-header">Our Philosophy</h2>
                <div className="au-linear-body">
                    <p>We believe that durable enterprises are built on three foundations:</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Strategic clarity</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Operational discipline</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Governance integrity</p>
                    <p>Without these elements, growth becomes unstable, profitability becomes uncertain, and leadership becomes exposed.</p>
                    <p>Our advisory approach is therefore grounded in structure, evidence, and execution.</p>
                    <p>We do not rely on assumptions.</p>
                    <p>We rely on analysis, systems, and measurable outcomes.</p>
                </div>
            </section>

            {/* Our Approach */}
            <section className="au-linear-section" ref={el => sectionRefs.current[4] = el}>
                <h2 className="au-linear-header">Our Approach</h2>
                <div className="au-linear-body">
                    <p>Every Gragabo engagement follows a rigorous, integrated methodology.</p>
                    <h3 className="au-linear-subheader">Comprehensive Diagnostics</h3>
                    <p>We begin by conducting a detailed assessment of financial performance, operational systems, governance frameworks, market positioning, and organizational capacity.</p>
                    <p>This diagnostic phase establishes an objective foundation for all subsequent decisions.</p>
                </div>
            </section>

            {/* Integrated System Architecture */}
            <section className="au-linear-section" ref={el => sectionRefs.current[5] = el}>
                <h2 className="au-linear-header">Integrated System Architecture</h2>
                <div className="au-linear-body">
                    <p>Based on diagnostic findings, we design coordinated frameworks covering:</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Business strategy and market positioning</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Operational and supply chain systems</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Financial and legal structuring</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Governance and reporting mechanisms</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Digital and technological infrastructure</p>
                    <p>All components are aligned to support scalability and institutional maturity.</p>
                </div>
            </section>

            {/* Execution and Stabilization */}
            <section className="au-linear-section" ref={el => sectionRefs.current[6] = el}>
                <h2 className="au-linear-header">Execution and Stabilization</h2>
                <div className="au-linear-body">
                    <p>We remain actively involved during implementation, supporting organizational restructuring, system integration, and performance optimization.</p>
                    <p>Our engagement extends until operational stability and measurable improvement are achieved.</p>
                </div>
            </section>

            {/* Our Areas of Expertise */}
            <section className="au-linear-section" ref={el => sectionRefs.current[7] = el}>
                <h2 className="au-linear-header">Our Areas of Expertise</h2>
                <div className="au-linear-body">
                    <p>Gragabo provides integrated advisory services across the following domains:</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Business strategy and corporate governance</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Financial and legal structuring</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Capital and investment readiness</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />International trade and logistics systems</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Industrial and regulated production advisory</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Digital transformation and design architecture</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Innovation and impact development</p>
                    <p>This multidisciplinary capability enables us to address complex business challenges holistically.</p>
                </div>
            </section>

            {/* Professional Experience */}
            <section className="au-linear-section" ref={el => sectionRefs.current[8] = el}>
                <h2 className="au-linear-header">Professional Experience</h2>
                <div className="au-linear-body">
                    <p>Gragabo's leadership and advisory teams bring extensive experience across regulated industries, international trade environments, manufacturing operations, and investment-linked enterprises.</p>
                    <p>Our engagements have included:</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Development of production businesses from concept to profitability</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Structuring of cross-border operational platforms</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Preparation of organizations for export and international expansion</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Implementation of compliance and governance systems</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Optimization of supply chains and cost structures</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Establishment of institutional reporting and control frameworks</p>
                    <p>These experiences inform a pragmatic and execution-focused advisory model.</p>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="au-linear-section" ref={el => sectionRefs.current[9] = el}>
                <h2 className="au-linear-header">Who We Serve</h2>
                <div className="au-linear-body">
                    <p>We partner with organizations that seek institutional maturity and long-term competitiveness, including:</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Growth-oriented founders and executives</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Export-oriented manufacturers and producers</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Family-owned enterprises in transition</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />International investors and holding structures</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Regulated industry operators</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Multi-partner ventures and joint enterprises</p>
                    <p>Our clients share a commitment to disciplined growth and professional governance.</p>
                </div>
            </section>

            {/* Why Organizations Choose Gragabo */}
            <section className="au-linear-section" ref={el => sectionRefs.current[10] = el}>
                <h2 className="au-linear-header">Why Organizations Choose Gragabo</h2>
                <div className="au-linear-body">
                    <p>Clients engage Gragabo for one primary reason.</p>
                    <p className="au-statement">We deliver control.</p>
                    <p>After engagement, organizations experience:</p>
                    <p className="has-bullet"><span className="au-check-styled">✓</span>Increased financial visibility</p>
                    <p className="has-bullet"><span className="au-check-styled">✓</span>Reduced operational and regulatory risk</p>
                    <p className="has-bullet"><span className="au-check-styled">✓</span>Improved managerial accountability</p>
                    <p className="has-bullet"><span className="au-check-styled">✓</span>Stronger strategic alignment</p>
                    <p className="has-bullet"><span className="au-check-styled">✓</span>Greater organizational resilience</p>
                    <p className="has-bullet"><span className="au-check-styled">✓</span>Enhanced investor and partner confidence</p>
                    <p>We build institutions, not temporary solutions.</p>
                </div>
            </section>

            {/* Our Commitment */}
            <section className="au-linear-section" ref={el => sectionRefs.current[11] = el}>
                <h2 className="au-linear-header">Our Commitment</h2>
                <div className="au-linear-body">
                    <p>Gragabo operates under principles of integrity, confidentiality, and long-term partnership.</p>
                    <p>We engage selectively.</p>
                    <p>We work only with organizations prepared to implement disciplined systems and pursue sustainable excellence.</p>
                    <p>Our reputation is built on discretion, reliability, and results.</p>
                </div>
            </section>

            {/* Begin Your Strategic Engagement */}
            <section className="au-linear-section au-linear-cta" ref={el => sectionRefs.current[12] = el}>
                <h2 className="au-linear-header">Begin Your Strategic Engagement</h2>
                <div className="au-linear-body">
                    <p>If your organization is seeking clarity, stability, and scalable performance, we invite you to begin with a structured strategic assessment.</p>
                    <p>In the initial consultation, we will:</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Evaluate your organizational architecture</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Identify structural risks and opportunities</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Outline improvement pathways</p>
                    <p className="has-bullet"><span className="au-bullet-styled" />Define next-stage development priorities</p>
                    <p>No generic proposals.</p>
                    <p>No superficial recommendations.</p>
                    <p>Only structured analysis.</p>

                    <div className="au-linear-buttons">
                        <a href="https://calendly.com/gragabo/30min" target="_blank" rel="noopener noreferrer" className="au-linear-btn primary">Schedule a 30-Minute Consultation</a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfomix20PAaIJE9vXMnUdvNCQgaAO0SxlYi_ARHUNboJ571wg/viewform?pli=1" target="_blank" rel="noopener noreferrer" className="au-linear-btn secondary">Complete Our Diagnostic Form</a>
                    </div>
                </div>
            </section>

            {/* Final Reflection */}
            <section className="au-linear-section au-linear-final" ref={el => sectionRefs.current[13] = el}>
                <h2 className="au-linear-header">Final Reflection</h2>
                <div className="au-linear-body">
                    <p>Organizations that succeed over decades are not defined by isolated successes.</p>
                    <p>They are defined by systems.</p>
                    <p>If you are prepared to build an enterprise that endures, Gragabo is your strategic partner.</p>
                </div>
            </section>

            <Footer />
        </div>
    );
}
