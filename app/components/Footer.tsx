import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <p className={styles.brand}>Maison Solène</p>
          <p className={styles.tagline}>Cuisine gastronomique de saison.</p>
        </div>

        <div className={styles.col}>
          <h4>Adresse</h4>
          <p>
            14 quai Saint-Antoine
            <br />
            69002 Lyon, France
          </p>
        </div>

        <div className={styles.col}>
          <h4>Horaires</h4>
          <p>
            Mardi – Samedi
            <br />
            12h – 14h · 19h30 – 22h
            <br />
            Fermé dimanche & lundi
          </p>
        </div>

        <div className={styles.col}>
          <h4>Suivez-nous</h4>
          <ul className={styles.social}>
            <li>
              <a href="#" aria-label="Instagram">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook">
                Facebook
              </a>
            </li>
            <li>
              <a href="mailto:contact@maisonsolene.fr">contact@maisonsolene.fr</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} Maison Solène. Tous droits réservés.</p>
        <p>Restaurant fictif — projet vitrine.</p>
      </div>
    </footer>
  );
}
