"use client";

import "./footer.css";


export function Footer() {
    return (
        <footer id="contact" className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <img
                        src="/images/logoGragaboHeader&Footer.svg"
                        alt="Gragabo"
                        className="footer-logo"
                    />
                    <p>
                        Gragabo is more than a company, it’s a global alliance of people
                        who believe the world can be better.
                    </p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <a href="/#home">Home</a>
                        </li>
                        <li>
                            <a href="/about-us">About Us</a>
                        </li>
                        <li>
                            <a href="/#services">Services</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/gragaboholding/" target="_blank" rel="noopener noreferrer" title="Instagram">
                            Ig
                        </a>
                        <a href="https://www.linkedin.com/company/gragabo/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                            Li
                        </a>
                        <a href="https://x.com/GragaboEnt" target="_blank" rel="noopener noreferrer" title="X">
                            X
                        </a>
                    </div>
                </div>
                <div className="footer-links">
                    <h3>Legal</h3>
                    <ul>
                        <li>
                            <a href="/terms-and-conditions">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="/privacy-policy">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/legal-notice">Legal Notice</a>
                        </li>
                        <li>
                            <a href="/cookie-consent">Cookie Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Gragabo. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
