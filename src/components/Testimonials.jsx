import { useState } from "react";
import styles from "./Testimonials.module.css";

import firstClient from "../assets/Ellipse 1.png";
import secondClient from "../assets/Ellipse 1 (1).png";

function getTestimonials() {
  return [
    {
      name: "OSALOBOA IYOSA",
      image: firstClient,
      review:
        "I've worked with a few trainers over the years, but this experience was completely different. The workouts were tailored to my goals, my nutrition was simplified instead of overcomplicated, and I always knew exactly what I needed to do each week. In just four months, I lost 18kg, gained confidence, and built habits that actually fit into my daily life. The constant check-ins and accountability kept me consistent even on days I didn't feel motivated. This wasn't just about getting in shape, it completely changed the way I approach fitness.",
    },
    {
      name: "ODION IZZI",
      image: secondClient,
      review:
        "I joined with the goal of building strength after years of feeling intimidated by the gym, and I'm genuinely amazed by how far I've come. Every session was structured, encouraging, and focused on proper technique rather than rushing results. The meal guidance was practical, the recommended supplements made recovery much easier, and I could see progress every single month. Six months later, I've dropped two dress sizes, increased my strength beyond what I thought was possible, and for the first time in years, I feel confident in the gym.",
    },
  ];
}

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = getTestimonials();

  const displayedTestimonials = testimonials.map(function (item, index) {
    return testimonials[(index + activeIndex) % testimonials.length];
  });

  function showPrevious() {
    setActiveIndex(function (current) {
      return (current - 1 + testimonials.length) % testimonials.length;
    });
  }

  function showNext() {
    setActiveIndex(function (current) {
      return (current + 1) % testimonials.length;
    });
  }

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.container}>
        <h2 className={styles.heading}>
          CLIENT <span>TESTIMONIES</span>
        </h2>

        <p className={styles.intro}>
          Have a look at our trusted customers and their experience using Prime
          products and services.
        </p>

        <div className={styles.testimonialList}>
          {displayedTestimonials.map(function (item) {
            return (
              <article className={styles.card} key={item.name}>
                <div className={styles.cardHeader}>
                  <div className={styles.profile}>
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                  </div>

                  <div className={styles.stars} aria-label="5 out of 5 stars">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>

                <p className={styles.review}>"{item.review}"</p>
              </article>
            );
          })}
        </div>

        <div className={styles.arrowControls}>
          <button
            type="button"
            className={styles.arrowButton}
            onClick={showPrevious}
            aria-label="Previous testimonials"
          >
            &#8592;
          </button>

          <button
            type="button"
            className={styles.arrowButton}
            onClick={showNext}
            aria-label="Next testimonials"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
