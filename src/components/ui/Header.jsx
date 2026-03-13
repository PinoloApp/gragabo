'use client';

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import "./header.css";

export function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setMobileMenuOpen(prev => !prev);
    }, []);

    const closeMobileMenu = useCallback(() => {
        setMobileMenuOpen(false);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    useEffect(() => {
        const header = document.querySelector(".header");
        if (!header) return;

        let lastScrollY = window.scrollY;
        let ticking = false;
        const DELTA = 5;

        const updateScroll = () => {
            const currentScrollY = window.scrollY;
            const diff = Math.abs(currentScrollY - lastScrollY);

            if (currentScrollY <= 10) {
                header.classList.remove("scrolled", "hidden-header");
            } else if (diff > DELTA) {
                if (currentScrollY > lastScrollY) {
                    header.classList.add("hidden-header");
                    header.classList.remove("scrolled");
                } else {
                    header.classList.remove("hidden-header");
                    header.classList.add("scrolled");
                }
            }

            lastScrollY = currentScrollY;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScroll);
                ticking = true;
            }
        };

        updateScroll();

        window.addEventListener("scroll", onScroll, { passive: true });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="/#"]').forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
                if (pathname === '/') {
                    e.preventDefault();
                    const targetId = this.getAttribute("href").replace('/', '');
                    if (targetId === "#") return;

                    const target = document.querySelector(targetId);
                    if (target) {
                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    }
                }
            });
        });

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [pathname]);

    const handleNavClick = (e, href) => {
        closeMobileMenu();
        if (href.startsWith('/#') && pathname !== '/') {
            e.preventDefault();
            window.location.assign(href);
        }
    };

    return (
        <>
            <header className="header">
                <div className="container header-container">
                    <div className="logo-container">
                        {pathname !== '/' && (
                            <a href="/" onClick={(e) => { if (pathname !== '/') { e.preventDefault(); window.location.assign("/"); } }}>
                                <img src="/images/logoGragaboHeader&Footer.svg" alt="Gragabo Logo" className="header-logo" />
                            </a>
                        )}
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="nav nav-desktop">
                        <a href="/#home" onClick={(e) => handleNavClick(e, '/#home')}>Home</a>
                        <a href="/about-us">About Us</a>
                        <a href="/#services" onClick={(e) => handleNavClick(e, '/#services')}>Services</a>
                        <a href="/contact">Contact</a>
                    </nav>

                    {/* Mobile Hamburger Button */}
                    <button
                        className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`}
                onClick={closeMobileMenu}
                aria-hidden="true"
            />

            {/* Mobile Drawer */}
            <nav className={`mobile-drawer ${mobileMenuOpen ? 'active' : ''}`}>
                <div className="mobile-drawer-content">
                    <div className="mobile-nav-links">
                        <a href="/#home" onClick={(e) => handleNavClick(e, '/#home')}>Home</a>
                        <a href="/about-us" onClick={closeMobileMenu}>About Us</a>
                        <a href="/#services" onClick={(e) => handleNavClick(e, '/#services')}>Services</a>
                        <a href="/contact" onClick={closeMobileMenu}>Contact</a>
                    </div>
                    <div className="mobile-drawer-footer">
                        <div className="mobile-social-links">
                            <a href="https://www.instagram.com/gragaboholding/" target="_blank" rel="noopener noreferrer">Ig</a>
                            <a href="https://www.linkedin.com/company/gragabo/" target="_blank" rel="noopener noreferrer">Li</a>
                            <a href="https://x.com/GragaboEnt" target="_blank" rel="noopener noreferrer">X</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
