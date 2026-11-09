import styles from "./TrainHardBanner.module.css";
import primeLogo from "../assets/Frame 50 (1).png";

function TrainHardBanner({ variant }) {
  return (
    <section
      className={`${styles.banner} ${
        variant === "product" ? styles.productBanner : ""
      }`}
    >
      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          {[1, 2].map(function (item) {
            return (
              <div className={styles.marqueeGroup} key={item}>
                <span>TRAIN HARD</span>
                <img src={primeLogo} alt="Prime Fitness" />
                <span>REP HARD</span>
                <img src={primeLogo} alt="Prime Fitness" />
                <span>FIT HARD</span>
                <img src={primeLogo} alt="Prime Fitness" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrainHardBanner;
