"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} glass`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#home">
            WAYANAD<span className={styles.dot}>.</span>
            <span className={styles.subtitle}>HOUSE</span>
          </a>
        </div>

        <button 
          className={`${styles.menuBtn} ${isOpen ? styles.menuBtnActive : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className={styles.hamburger}></span>
        </button>

        <div className={`${styles.navLinks} ${isOpen ? styles.navLinksActive : ""}`}>
          <a href="#home" onClick={closeMenu} className={styles.link}>Home</a>
          <a href="#about" onClick={closeMenu} className={styles.link}>About</a>
          <a href="#track-record" onClick={closeMenu} className={styles.link}>Track Record</a>
          <a href="#vision" onClick={closeMenu} className={styles.link}>Vision</a>
          <a href="#manifesto" onClick={closeMenu} className={styles.link}>Manifesto</a>
          <a href="#qa" onClick={closeMenu} className={styles.link}>Connect</a>
          <a href="#vote" onClick={closeMenu} className={`${styles.voteBtn} btn btn-primary`}>
            Support Girish
          </a>
        </div>
      </div>
    </nav>
  );
}
