import styles from "./FitnessFooter.module.css";
import primeFitnessLogo from "../assets/Frame 57.png";

function FitnessFooter() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.footerTop}>
        <div className={styles.brand}>
          <img
            src={primeFitnessLogo}
            alt="Prime Fitness logo"
            className={styles.logo}
          />

          <p>
            Coaching and gear for people who'd rather forge results than wait
            for them.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.linkColumn}>
            <h3>Pages</h3>
            <a href="#home">Home</a>
            <a href="#about">About us</a>
            <a href="#programs">Our Programs</a>
            <a href="/shop">Shop</a>
            <a href="#contact">Contact us</a>
          </div>

          <div className={styles.linkColumn}>
            <h3>Shop</h3>
            <a href="#apparel">Apparels</a>
            <a href="#equipment">Equipment</a>
            <a href="#supplements">Supplements</a>
          </div>

          <div className={styles.linkColumn}>
            <h3>Legal Information</h3>
            <a href="#terms">Terms &amp; Conditions</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>

      <div className={styles.brandDisplay} aria-label="Prime Fitness">
        <span className={styles.primeText}>PRIME</span>
        <span className={styles.fitnessText}>FITNESS</span>
      </div>
    </footer>
  );
}

export default FitnessFooter;
