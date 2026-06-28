import Reveal from "./Reveal";
import styles from "./Menu.module.css";

type Dish = { name: string; desc: string; price: string };
type Category = { title: string; dishes: Dish[] };

const MENU: Category[] = [
  {
    title: "Entrées",
    dishes: [
      {
        name: "Velouté de potimarron",
        desc: "Châtaigne torréfiée, huile de noisette, copeaux de comté affiné.",
        price: "18",
      },
      {
        name: "Tartare de truite des Alpes",
        desc: "Agrumes confits, aneth, crème d'huître.",
        price: "24",
      },
      {
        name: "Œuf parfait à 64°",
        desc: "Champignons de Paris, mousseline de panais, jus corsé.",
        price: "21",
      },
      {
        name: "Foie gras maison",
        desc: "Chutney de coing, brioche tiède, fleur de sel de Guérande.",
        price: "28",
      },
    ],
  },
  {
    title: "Plats",
    dishes: [
      {
        name: "Pigeon des Dombes",
        desc: "Cuisse confite, betterave, sauce au sang et cacao.",
        price: "42",
      },
      {
        name: "Saint-pierre de ligne",
        desc: "Beurre blanc au vin jaune, poireaux brûlés, caviar d'Aquitaine.",
        price: "46",
      },
      {
        name: "Ris de veau croustillant",
        desc: "Topinambour, câpres, jus réduit au vinaigre de Xérès.",
        price: "44",
      },
      {
        name: "Risotto Carnaroli aux truffes",
        desc: "Parmesan 36 mois, truffe noire du Périgord (en saison).",
        price: "38",
      },
    ],
  },
  {
    title: "Desserts",
    dishes: [
      {
        name: "Soufflé au Grand Marnier",
        desc: "Glace vanille de Madagascar, tuile dentelle.",
        price: "16",
      },
      {
        name: "Tarte fine au chocolat Guanaja",
        desc: "Praliné maison, sorbet cacao, fleur de sel.",
        price: "15",
      },
      {
        name: "Poire pochée au vin épicé",
        desc: "Crème d'amande, croquant de spéculoos.",
        price: "14",
      },
    ],
  },
];

export default function Menu() {
  return (
    <section className={styles.section} id="menu">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">À la carte</p>
          <h2 className={styles.title}>Le menu</h2>
          <p className={styles.note}>
            Carte renouvelée au fil des saisons. Menu dégustation en 7 services
            disponible le soir — 95€.
          </p>
        </Reveal>

        <div className={styles.categories}>
          {MENU.map((cat, i) => (
            <Reveal key={cat.title} className={styles.category} delay={i * 100}>
              <h3 className={styles.catTitle}>{cat.title}</h3>
              <ul className={styles.list}>
                {cat.dishes.map((d) => (
                  <li key={d.name} className={styles.item}>
                    <div className={styles.itemHead}>
                      <span className={styles.itemName}>{d.name}</span>
                      <span className={styles.dots} aria-hidden />
                      <span className={styles.price}>{d.price}€</span>
                    </div>
                    <p className={styles.desc}>{d.desc}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
