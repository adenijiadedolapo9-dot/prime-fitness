import styles from "./Strength.module.css";

import frame13 from "../assets/Frame 13.png";
import frame14 from "../assets/Frame 14.png";
import frame15 from "../assets/Frame 15.png";

const cards = [
  {
    image: frame13,
    title: "Personal Training",
  },
  {
    image: frame14,
    title: "Strength Training",
  },
  {
    image: frame15,
    title: "Fitness Programs",
  },
];

function Strength() {
  return (
    <section className={styles.strength} id="about">
      <div className={styles.intro}>
        <h2>
          <span>WHERE</span> STRENGTH
          <br />
          MEETS <span>PURPOSE</span>
        </h2>

        <div className={styles.description}>
          <p>
            Real transformation doesn't happen overnight. It happens through
            consistency, expert guidance, and the right tools. From one-on-one
            coaching to premium fitness products, we're here to help you train
            smarter, recover better, and become the strongest version of
            yourself.
          </p>

          <a href="#programs">View more</a>
        </div>
      </div>

      <div className={styles.cards} id="programs">
        {cards.map((card) => (
          <article className={styles.card} key={card.title}>
            <img src={card.image} alt={card.title} />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Strength;
