import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.media}>
        <Image
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=2000&q=80"
          alt="Salle du restaurant Maison Solène à la tombée du jour"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.scrim} />
      </div>

      <div className={`container ${styles.content}`}>
        <p className={`eyebrow ${styles.eyebrow}`}>Lyon · Depuis 1998</p>
        <h1 className={styles.title}>Maison Solène</h1>
        <p className={styles.subtitle}>
          Une cuisine de saison où chaque assiette raconte un terroir.
        </p>
        <a href="#reservation" className={styles.cta}>
          Réserver une table
        </a>
      </div>

      <a href="#philosophie" className={styles.scroll} aria-label="Faire défiler">
        <span />
      </a>
    </section>
  );
}
