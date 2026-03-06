"use client";

import "./home.css";
import { Footer } from "@/components/ui/Footer";
import { ReactLenis } from '@studio-freight/react-lenis';

export default function Home() {

  return (
    <ReactLenis root>
      <div className="home-wrapper">
        <main>
          {/* Glavna sekcija sa celog ekrana */}
          <section id="home" className="hero">
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
              <p className="hover-text">Hover the dots</p>
            </div>
          </section>

        </main>

        {/* Tamni premium footer koji se uklapa sa zlatnom logotipa */}
        <Footer />
      </div>
    </ReactLenis>
  );
}
