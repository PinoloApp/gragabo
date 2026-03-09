'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./header.css";

export function Header() {
    const pathname = usePathname();

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
                // Samo na Početnoj prekidamo default link jer smo već tu pa možemo da skrolamo glatko.
                // Na drugim rutama dozvoljavamo NextJS-u da nas prebaci na Početnu gde će browser automatski naći ID.
                if (pathname === '/') {
                    e.preventDefault();
                    const targetId = this.getAttribute("href").replace('/', ''); // izbacujemo višak '/'
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

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo-container">
                    {pathname !== '/' && (
                        <a href="/" onClick={(e) => { if (pathname !== '/') { e.preventDefault(); window.location.assign("/"); } }}>
                            <img src="/images/logoGragaboHeader&Footer.svg" alt="Gragabo Logo" className="header-logo" />
                        </a>
                    )}
                </div>
                <nav className="nav">
                    <a href="/#home" onClick={(e) => { if (pathname !== '/') { e.preventDefault(); window.location.assign("/#home"); } }}>Home</a>
                    <a href="/about-us">About Us</a>
                    <a href="/#services" onClick={(e) => { if (pathname !== '/') { e.preventDefault(); window.location.assign("/#services"); } }}>Services</a>
                    <a href="/contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}
