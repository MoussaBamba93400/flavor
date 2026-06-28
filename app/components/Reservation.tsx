"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import styles from "./Reservation.module.css";

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Vitrine : aucune donnée n'est envoyée, on simule la confirmation.
    setSubmitted(true);
  };

  return (
    <section className={styles.section} id="reservation">
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.head}>
          <p className="eyebrow">Réservation</p>
          <h2 className={styles.title}>Réserver une table</h2>
          <p className={styles.note}>
            Service du mardi au samedi, midi et soir. Pour les groupes de plus de
            8 convives, contactez-nous directement au 04 78 00 00 00.
          </p>
        </Reveal>

        <Reveal className={styles.formWrap} delay={120}>
          {submitted ? (
            <div className={styles.confirm} role="status">
              <span className={styles.check}>✓</span>
              <h3 className={styles.confirmTitle}>Demande envoyée</h3>
              <p>
                Merci. Nous vous recontactons sous 24 h pour confirmer votre table.
                Au plaisir de vous accueillir à la Maison Solène.
              </p>
              <button className={styles.reset} onClick={() => setSubmitted(false)}>
                Nouvelle réservation
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={onSubmit}>
              <div className={styles.field}>
                <label htmlFor="name">Nom complet</label>
                <input id="name" name="name" type="text" required autoComplete="name" />
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="date">Date</label>
                  <input id="date" name="date" type="date" required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="time">Heure</label>
                  <input id="time" name="time" type="time" required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="guests">Convives</label>
                  <select id="guests" name="guests" defaultValue="2" required>
                    {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Message (allergies, occasion…)</label>
                <textarea id="message" name="message" rows={3} />
              </div>

              <button type="submit" className={styles.submit}>
                Envoyer la demande
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
