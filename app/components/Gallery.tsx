"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Reveal from "./Reveal";
import styles from "./Gallery.module.css";

const PHOTOS = [
  { src: "photo-1517248135467-4c7edcad34c4", alt: "Salle à manger élégante" },
  { src: "photo-1414235077428-338989a2e8c0", alt: "Dressage d'une assiette gastronomique" },
  { src: "photo-1504674900247-0877df9cc836", alt: "Plat signature du chef" },
  { src: "photo-1551218808-94e220e084d2", alt: "Détail d'un dessert" },
  { src: "photo-1466978913421-dad2ebd01d17", alt: "Bar et cave à vins" },
  { src: "photo-1424847651672-bf20a4b0982b", alt: "Verres et table dressée" },
  { src: "photo-1559339352-11d035aa65de", alt: "Ambiance du restaurant le soir" },
  { src: "photo-1540189549336-e6e99c3679fe", alt: "Assiette de saison colorée" },
];

const url = (id: string, w: number) => `https://images.unsplash.com/${id}?w=${w}&q=80`;

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: number) =>
      setActive((cur) => {
        if (cur === null) return cur;
        return (cur + dir + PHOTOS.length) % PHOTOS.length;
      }),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  return (
    <section className={styles.section} id="galerie">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">En images</p>
          <h2 className={styles.title}>La galerie</h2>
        </Reveal>

        <div className={styles.grid}>
          {PHOTOS.map((p, i) => (
            <Reveal key={p.src} delay={(i % 4) * 80} className={styles.cell}>
              <button
                type="button"
                className={styles.cellBtn}
                onClick={() => setActive(i)}
                aria-label={`Agrandir : ${p.alt}`}
              >
                <Image
                  src={url(p.src, 800)}
                  alt={p.alt}
                  width={600}
                  height={600}
                  sizes="(max-width: 700px) 50vw, 25vw"
                  className={styles.img}
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className={styles.lightbox} onClick={close} role="dialog" aria-modal="true">
          <button className={styles.lbClose} onClick={close} aria-label="Fermer">
            ×
          </button>
          <button
            className={`${styles.lbNav} ${styles.lbPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Précédent"
          >
            ‹
          </button>
          <figure className={styles.lbFigure} onClick={(e) => e.stopPropagation()}>
            <Image
              src={url(PHOTOS[active]!.src, 1600)}
              alt={PHOTOS[active]!.alt}
              width={1400}
              height={1000}
              sizes="90vw"
              className={styles.lbImg}
            />
            <figcaption className={styles.lbCaption}>{PHOTOS[active]!.alt}</figcaption>
          </figure>
          <button
            className={`${styles.lbNav} ${styles.lbNext}`}
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Suivant"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
