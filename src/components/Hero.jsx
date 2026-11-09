import Navbar from "./Navbar";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <Navbar />

      <div className={styles.heroContent}>
        <h1>
          TRAIN HARDER,
          <span>LIVE STRONGER</span>
        </h1>

        <p>
          Personalized coaching designed to help you build strength, lose fat,
          and become your strongest self.
        </p>

        <a href="#products" className={styles.heroButton}>
          Explore Products
        </a>
      </div>

      <div className={styles.heroAthletes} aria-hidden="true" />
    </section>
  );
}

export default Hero;
