"use client";

import "./home.css";
import { useState, useEffect } from "react";
import { Footer } from "@/components/ui/Footer";
import { ReactLenis } from '@studio-freight/react-lenis';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [heroHeight, setHeroHeight] = useState("100vh");

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);

    // Absolutely lock the hero height in pixels on mobile
    const lockHeight = () => {
      setHeroHeight(`${window.innerHeight}px`);
    };

    let vw = window.innerWidth;
    lockHeight();

    const handleResize = () => {
      const currentVw = window.innerWidth;
      // Only recalculate if screen width changes (e.g. rotation), ignore simple vertical scrolls
      if (currentVw === vw && currentVw < 1024) return;
      vw = currentVw;
      lockHeight();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      mq.removeEventListener("change", handler);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="home-wrapper">
        <main>
          {/* Glavna sekcija sa celog ekrana */}
          <section id="home" className="hero" style={{ height: heroHeight }}>
            <div className="hero-bg"></div>
            <div className="hero-content">
              {/* Koristimo object tag kako bi CSS hover efekti unutar SVG-a radili */}
              <object
                type="image/svg+xml"
                data="/images/logoGragabo.svg"
                className="main-logo"
                aria-label="Gragabo Logo"
              ></object>
            </div>

            <div className="scroll-indicator">
              <p className="hover-text">{isMobile ? "Touch the dots" : "Hover over the dots"}</p>
            </div>
          </section>

        </main>

        {/* Tamni premium footer koji se uklapa sa zlatnom logotipa */}
        <Footer />
      </div>
    </ReactLenis>
  );
}
