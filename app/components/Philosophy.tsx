import Image from "next/image";
import Reveal from "./Reveal";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
  return (
    <section className={styles.section} id="philosophie">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.text}>
          <p className="eyebrow">La philosophie du chef</p>
          <h2 className={styles.title}>Le produit, d&apos;abord</h2>
          <p className={styles.lead}>
            Chez Maison Solène, tout commence au marché, bien avant le service. Le chef
            Adrien Vasseur compose chaque matin une carte courte, dictée par ce que les
            producteurs de la région ont de plus juste ce jour-là.
          </p>
          <p className={styles.body}>
            Nous croyons qu&apos;une grande cuisine se reconnaît à sa retenue : peu
            d&apos;ingrédients, des cuissons précises, et le respect absolu du goût
            originel. Le reste n&apos;est qu&apos;artifice.
          </p>
          <p className={styles.signature}>Adrien Vasseur — Chef de cuisine</p>
        </Reveal>

        <Reveal className={styles.media} delay={150}>
          <Image
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&q=80"
            alt="Le chef Adrien Vasseur dressant une assiette"
            width={720}
            height={900}
            sizes="(max-width: 900px) 100vw, 45vw"
            className={styles.image}
          />
        </Reveal>
      </div>
    </section>
  );
}
