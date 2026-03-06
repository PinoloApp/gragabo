import { Footer } from '@/components/ui/Footer';
import './ContactPage.css';

export default function ContactPage() {
    return (
        <div className="cp-page">
            <section className="cp-hero">
                <div className="cp-hero-content">
                    <p className="cp-eyebrow">contact</p>
                    <h1 className="cp-title">Gragabo D.O.O.</h1>

                    <p className="cp-info-line">
                        <span className="cp-info-label">Director</span>
                        Nikola Gragabo
                    </p>
                    <p className="cp-info-line">
                        <span className="cp-info-label">PIB (Tax Number)</span>
                        115466511
                    </p>
                    <p className="cp-info-line">
                        <span className="cp-info-label">MB (Registration Number)</span>
                        22161814
                    </p>
                    <p className="cp-info-line">
                        <span className="cp-info-label">RSD Bank Account</span>
                        265-1060310004415-02
                    </p>
                    <p className="cp-info-line">
                        <span className="cp-info-label">Phone (WhatsApp)</span>
                        +38163311800
                    </p>
                    <p className="cp-info-line">
                        <span className="cp-info-label">Web</span>
                        <a href="https://www.gragabo.com" target="_blank" rel="noopener noreferrer" className="cp-link">
                            www.gragabo.com
                        </a>
                    </p>
                    <p className="cp-info-line">
                        <span className="cp-info-label">Email</span>
                        <a href="mailto:international@gragabo.com" className="cp-link">international@gragabo.com</a>
                    </p>
                    <p className="cp-info-line">
                        <span className="cp-info-label">Address</span>
                        City Passage Business Center, 18-20 Oblicev venac, Suite: 6.16, Stari grad, Belgrad, Serbia, 11000
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}
