'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./header.css";

export function Header() {
    const pathname = usePathname();

    useEffect(() => {
        const header = document.querySelector(".header");

        // Smooth sticky header effect
        const handleScroll = () => {
            if (window.scrollY > 50) {
                header?.classList.add("scrolled");
            } else {
                header?.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);

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
            window.removeEventListener("scroll", handleScroll);
        };
    }, [pathname]);

    return (
        <header className="header">
            <div className="container header-container">
                <nav className="nav">
                    <a href="/#home" onClick={(e) => { if (pathname !== '/') { e.preventDefault(); window.location.assign("/#home"); } }}>Početna</a>
                    <a href="/#about" onClick={(e) => { if (pathname !== '/') { e.preventDefault(); window.location.assign("/#about"); } }}>O nama</a>
                    <a href="/#services" onClick={(e) => { if (pathname !== '/') { e.preventDefault(); window.location.assign("/#services"); } }}>Usluge</a>
                    <a href="/#contact" onClick={(e) => { if (pathname !== '/') { e.preventDefault(); window.location.assign("/#contact"); } }}>Kontakt</a>
                </nav>
            </div>
        </header>
    );
}
