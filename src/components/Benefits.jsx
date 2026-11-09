import logo from "../assets/watermarked_img_7591326214474801284 2 (3).png";
import muscleIcon from "../assets/icon-park-solid_muscle.png";
import trainingIcon from "../assets/Vector.png";
import resultsIcon from "../assets/streamline-block_entertainment-gym.png";

import styles from "./Benefits.module.css";

function Benefits() {
  return (
    <section className={styles.benefits}>
      <div className={styles.logo}>
        <img src={logo} alt="Prime Fitness" />
      </div>

      <div className={styles.intro}>
        <h2>
          WORK OUTS THAT
          <br />
          <span>
            WORK FOR <em>YOU</em>
          </span>
        </h2>

        <p>
          Training every session follows a clear plan, with progressive
          training that delivers results.
        </p>
      </div>

      <div className={styles.cards}>
        <article className={styles.card}>
          <div className={styles.icon}>
            <img src={muscleIcon} alt="Muscle" />
          </div>

          <h3>EXPERT TRAINERS</h3>

          <p>
            Our trainers focus on form, safety, and long-term improvement,
            not quick fixes or shortcuts.
          </p>
        </article>

        <article className={styles.card}>
          <div className={styles.icon}>
            <img src={trainingIcon} alt="Flexible training" />
          </div>

          <h3>FLEXIBLE TRAININGS</h3>

          <p>
            Train on your schedule with plans that adapt to your lifestyle,
            not the other way around.
          </p>
        </article>

        <article className={styles.card}>
          <div className={styles.icon}>
            <img src={resultsIcon} alt="Excellent results" />
          </div>

          <h3>EXCELLENT RESULTS</h3>

          <p>
            Track strength, conditioning, and consistency with clear
            benchmarks and regular assessments.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Benefits;