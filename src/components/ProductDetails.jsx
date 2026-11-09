import { useState } from "react";
import styles from "./ProductDetails.module.css";

import Navbar from "./Navbar";
import TrainHardBanner from "./TrainHardBanner";
import FitnessFooter from "./FitnessFooter";

import shortsMain from "../assets/Frame 31 (3).png";
import shorts1 from "../assets/Frame 2147234624 (2).png";
import shorts2 from "../assets/Frame 2147234625 (2).png";
import shorts3 from "../assets/Frame 2147234625 (3).png";
import shorts4 from "../assets/Frame 2147234624 (3).png";

import shoe from "../assets/Frame 23 (6).png";
import ladies from "../assets/Frame 78 (3).png";
import tee from "../assets/Frame 23 (1).png";
import hoodie from "../assets/Frame 31 (4).png";

function ProductDetails() {
  const productImages = [shorts1, shorts2, shorts3, shorts4];

  const [mainImage, setMainImage] = useState(shortsMain);
  const [size, setSize] = useState("L");
  const [quantity, setQuantity] = useState(1);

  const relatedProducts = [
    {
      name: "Prime pink sneakers",
      price: "₦25,400",
      image: shoe,
    },
    {
      name: "Prime ladies sweatshirts",
      price: "₦25,400",
      image: ladies,
    },
    {
      name: "Fitness Tee-shirt",
      price: "₦25,400",
      image: tee,
    },
    {
      name: "Prime Gym Hoodie",
      price: "₦25,400",
      image: hoodie,
    },
  ];

  const reviews = [
    {
      initials: "OI",
      name: "Osalobua Ugosa",
      date: "January 25",
      text: "Absolutely worth every naira. The fit is comfortable and the fabric feels premium.",
    },
    {
      initials: "KM",
      name: "Kim Mango",
      date: "January 25",
      text: "The material feels great and it looks exactly like the pictures.",
    },
    {
      initials: "YT",
      name: "Youri Tielemans",
      date: "January 25",
      text: "Great shorts, no complaints. Took one star off only because shipping took longer.",
    },
  ];

  return (
    <>
      <div className={styles.productHeader}>
        <Navbar />
      </div>

      <section className={styles.productPage}>
        <div className={styles.breadcrumb}>
          Home <span>›</span> Shop <span>›</span> Apparel <span>›</span>
          <strong> Prime Men's Shorts</strong>
        </div>

        <div className={styles.productGrid}>
          <div className={styles.productGallery}>
            <div className={styles.mainImageWrapper}>
              <img
                src={mainImage}
                alt="Prime Men's Shorts"
                className={styles.mainImage}
              />
            </div>

            <div className={styles.gallery}>
              {productImages.map(function (image, index) {
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setMainImage(image)}
                    className={`${styles.thumbButton} ${
                      mainImage === image ? styles.active : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Prime shorts view ${index + 1}`}
                      className={styles.thumb}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className={styles.details}>
            <span className={styles.tag}>Apparel</span>

            <h1>PRIME MEN'S SHORTS</h1>

            <div className={styles.rating}>
              <span>★★★★★</span>
              <strong>4.3</strong>
              <a href="#reviews">32 Reviews</a>
            </div>

            <h2>₦25,400</h2>

            <p className={styles.description}>
              Moisture-wicking performance shorts built for high-rep sets and
              hot gym floors. Four-way stretch fabric and flatlock seams help
              reduce friction while keeping you comfortable through every
              workout.
            </p>

            <p className={styles.stock}>Stock Qty: 6</p>

            <hr />

            <div className={styles.sizeSection}>
              <h4>Size</h4>

              <div className={styles.sizes}>
                {["S", "M", "L", "XL", "XXL"].map(function (item) {
                  return (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setSize(item)}
                      className={size === item ? styles.selected : ""}
                      aria-pressed={size === item}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className={styles.cartRow}>
              <div className={styles.quantity}>
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  −
                </button>

                <span>{quantity}</span>

                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              <button type="button" className={styles.cartButton}>
                <span className={styles.cartIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h2l2.4 11.5a2 2 0 0 0 2 1.5h9.8a2 2 0 0 0 1.9-1.4L22 7H5" />
                    <circle cx="9" cy="20" r="1.5" fill="#ffffff" />
                    <circle cx="18" cy="20" r="1.5" fill="#ffffff" />
                  </svg>
                </span>
                Add to Cart
              </button>

              <button
                type="button"
                className={styles.wish}
                aria-label="Add to wishlist"
              >
                ♡
              </button>
            </div>

            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <span>🚚</span>
                <div>
                  <h5>Free Shipping</h5>
                  <p>
                    Free shipping is valid on orders over ₦50,000 for all
                    customers. Shipping fees vary depending on location.
                  </p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <span>🔄</span>
                <div>
                  <h5>Easy Returns and Exchanges</h5>
                  <p>
                    We guarantee a perfect fit and accept returns and exchanges
                    within 30 days of purchase.
                  </p>
                </div>
              </div>

              <div className={`${styles.infoCard} ${styles.questionCard}`}>
                <span>❓</span>
                <div>
                  <h5>Questions?</h5>
                  <p>
                    Reach out to us on +2349077336637 for any questions or
                    complaints, or email us at the primefit@gmail.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <section className={styles.completeLook}>
          <h2>
            COMPLETE THE <span>LOOK</span>
          </h2>

          <p>Checkout items that match the fit best</p>

          <div className={styles.relatedGrid}>
            {relatedProducts.map(function (item, index) {
              return (
                <div key={index} className={styles.productCard}>
                  <div className={styles.relatedImage}>
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className={styles.relatedInfo}>
                    <p>{item.name}</p>
                    <strong>{item.price}</strong>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      
        <section id="reviews" className={styles.reviewsSection}>
          <h2>
            <span>REVIEWS</span> &amp; RATINGS
          </h2>

          <p>Checkout verified customer reviews on the product.</p>

          <div className={styles.reviewGrid}>
            <div className={styles.ratingCard}>
              <h3>4.8</h3>
              <p>Based on 10 reviews</p>
              <div>★★★★★</div>
            </div>

            <div className={styles.reviewList}>
              {reviews.map(function (review, index) {
                return (
                  <div key={index} className={styles.review}>
                    <div className={styles.avatar}>{review.initials}</div>

                    <div>
                      <h4>{review.name}</h4>
                      <div className={styles.stars}>★★★★★</div>
                      <p>{review.text}</p>
                      <small>{review.date}</small>
                    </div>
                  </div>
                );
              })}

              <div className={styles.pagination}>
                <span>Previous</span>
                <button type="button" className={styles.pageActive}>
                  1
                </button>
                <button type="button">2</button>
                <span>Next</span>
              </div>
            </div>
          </div>
        </section>
      </section>

      <TrainHardBanner variant="product" />
      <FitnessFooter />
    </>
  );
}

export default ProductDetails;
