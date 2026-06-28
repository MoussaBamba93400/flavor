"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

const LINKS = [
  { href: "#philosophie", label: "Philosophie" },
  { href: "#menu", label: "Menu" },
  { href: "#galerie", label: "Galerie" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          Maison Solène
        </a>

        <nav className={`${styles.links} ${open ? styles.open : ""}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#reservation" className={styles.cta} onClick={() => setOpen(false)}>
            Réserver
          </a>
        </nav>

        <button
          className={styles.burger}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
