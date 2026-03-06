'use client';

import { useRef } from 'react';
import { Footer } from '@/components/ui/Footer';
import privacyData from '@/data/PrivacyPolicyData.json';
import './TermsAndConditionsPage.css';

export default function PrivacyPolicyPage() {

    // Helper to render lines that might be lists
    const renderContent = (contentArr) => {
        const elements = [];
        let currentList = null;

        contentArr.forEach((line, index) => {
            if (line.startsWith('* ') || line.startsWith('- ')) {
                if (!currentList) {
                    currentList = [];
                }
                currentList.push(line.substring(2));
            } else {
                if (currentList) {
                    elements.push(
                        <ul key={`list-${index}`}>
                            {currentList.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    );
                    currentList = null;
                }
                elements.push(<p key={`p-${index}`}>{line}</p>);
            }
        });

        if (currentList) {
            elements.push(
                <ul key={`list-end`}>
                    {currentList.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            );
        }

        return elements;
    };

    return (
        <div className="tc-page">
            {/* HERO SECTION */}
            <section className="tc-hero">
                <div className="tc-hero-content">
                    <h1 className="tc-title">
                        Privacy <span className="tc-gold">Policy</span>
                    </h1>
                    <p className="tc-subtitle">
                        Description of how we collect, use, disclose, transfer, store, and safeguard your information.
                    </p>
                </div>
            </section>

            {/* DYNAMIC CONTENT SECTIONS */}
            {privacyData.map((section, idx) => {
                // Determine if it's the preamble (empty title)
                const isPreamble = !section.title;
                const titleText = isPreamble ? 'Preamble' : section.title;

                return (
                    <section key={idx} className="tc-content-section">
                        {titleText && (
                            <div className="tc-divider-label">
                                <span className={isPreamble ? 'tc-gold' : ''}>{titleText}</span>
                            </div>
                        )}
                        <div className="tc-content-grid">
                            <div className="tc-content-body">
                                {renderContent(section.intro)}
                            </div>

                            {section.subsections && section.subsections.length > 0 && (
                                <div className="tc-subsections">
                                    {section.subsections.map((sub, subIdx) => (
                                        <div key={subIdx} className="tc-subsection">
                                            <h3 className="tc-subsection-title tc-gold">{sub.title}</h3>
                                            <div className="tc-content-body">
                                                {renderContent(sub.content)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                );
            })}

            {/* CTA / FINAL */}
            <section className="tc-final-section">
                <div className="tc-final-inner">
                    <div className="tc-final-content">
                        <p className="tc-final-line">Review our other legal documents for more details.</p>
                    </div>
                    <div className="tc-final-actions">
                        <a href="/" className="tc-btn">← Back to Home</a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
