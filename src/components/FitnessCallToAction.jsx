import styles from "./FitnessCallToAction.module.css";

function FitnessCallToAction() {
  return (
    <section className={styles.callToAction}>
      <article className={`${styles.panel} ${styles.training}`}>
        <div className={styles.overlay}>
          <h2>READY TO TRAIN?</h2>
          <p>
            Book a session with us today and leave with a plan built around your
            actual goals.
          </p>
          <a href="#contact" className={styles.button}>
            Book Session
          </a>
        </div>
      </article>

      <article className={`${styles.panel} ${styles.gear}`}>
        <div className={styles.overlay}>
          <h2>READY TO GEAR UP?</h2>
          <p>
            Creatine, apparel and equipment, tested in-house before it ever
            reaches the shop.
          </p>
          <a href="#shop" className={styles.button}>
            Shop the Gear
          </a>
        </div>
      </article>
    </section>
  );
}

export default FitnessCallToAction;
