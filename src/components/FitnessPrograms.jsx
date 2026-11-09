
import styles from "./FitnessPrograms.module.css";

import muscleImage from "../assets/Frame 43 (7).png";
import weightLossImage from "../assets/Frame 43.png";
import athleticImage from "../assets/Frame 15.png";
import onlineCoachingImage from "../assets/Frame 43 (4).png";
import logo from "../assets/watermarked_img_7591326214474801284 2 (4).png";

const programs = [
  {
    title: "MUSCLE GROWTH",
    description:
      "This training is for Skinny individuals, Intermediate gym-goers, or just Bulking phase, this training includes Hypertrophy workouts, Meal plan, Supplement recommendations.",
    image: muscleImage,
    color: "rgba(150, 59, 36, 0.78)",
  },
  {
    title: "WEIGHT LOSS TRAININGS",
    description:
      "Burn fat and improve overall fitness. Suitable for beginners and intermediates looking to improve fitness. This training includes personalized workouts, Nutrition guide and Weekly progress check-ins.",
    image: weightLossImage,
    color: "rgba(30, 17, 13, 0.82)",
  },
  {
    title: "ATHLETIC TRAININGS",
    description:
      "We train athletes to improve their endurance, speed, strength and overall athletic performance through structured training programmes.",
    image: athleticImage,
    color: "rgba(150, 53, 30, 0.78)",
  },
  {
    title: "ONLINE COACHING",
    description:
      "Get expert guidance, personalized workout plans and professional support wherever you are. Train with the guidance of experienced coaches.",
    image: onlineCoachingImage,
    color: "rgba(40, 23, 17, 0.82)",
  },
];

function FitnessPrograms() {
  return (
    <section className={styles.fitnessPrograms} id="programs">

      <img
        src={logo}
        alt=""
        className={styles.backgroundLogo}
      />

      <div className={styles.container}>

        <h2 className={styles.heading}>
          OUR DIFFERENT
          <br />
          <span>FITNESS</span> PROGRAMS
        </h2>

        <div className={styles.programList}>

          {programs.map((program, index) => (
            <article
              className={styles.programCard}
              key={index}
            >

              {/* LEFT SIDE - BACKGROUND IMAGE AND TEXT */}
              <div
                className={styles.programInfo}
                style={{
                  "--panel-image": `url("${program.image}")`,
                  "--panel-color": program.color,
                }}
              >

                <div className={styles.programContent}>
                  <h3>{program.title}</h3>

                  <p>{program.description}</p>
                </div>

              </div>

              {/* RIGHT SIDE - FULL IMAGE */}
              <div className={styles.programImage}>
                <img
                  src={program.image}
                  alt={program.title}
                />
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FitnessPrograms;
