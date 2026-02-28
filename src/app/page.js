"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/ui/Header";
import "./home.css";

export default function Home() {

  return (
    <div className="home-wrapper">
      <Header />

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
            <div className="mouse"></div>
          </div>
        </section>

        {/* Dodatna sekcija za prezentaciju skrola */}
        <section id="about" className="placeholder-section">
          <div className="container">
            <h2>Zdravo zdravo</h2>
            <p>
              Tralalalallalalalalallalal odqwowqk owk do1kd okwo qkdijq wfqwi
              qwuf qwio fwqo ifjwqiof jqiwo jfiowq jfioqwj fwqkofk oqwj.
            </p>
          </div>
        </section>
      </main>

      {/* Tamni premium footer koji se uklapa sa zlatnom logotipa */}
      <footer id="contact" className="footer">
        <div className="container footer-container">
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
            <h3>Brzi linkovi</h3>
            <ul>
              <li>
                <a href="#home">Početna</a>
              </li>
              <li>
                <a href="#about">O nama</a>
              </li>
              <li>
                <a href="#services">Usluge</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Pratite nas</h3>
            <div className="social-icons">
              <a href="#" title="Facebook">
                Fb
              </a>
              <a href="#" title="Instagram">
                Ig
              </a>
              <a href="#" title="LinkedIn">
                Li
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Gragabo. Sva prava zadržana.</p>
        </div>
      </footer>
    </div>
  );
}
