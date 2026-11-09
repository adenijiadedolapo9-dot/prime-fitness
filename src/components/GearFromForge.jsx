import styles from "./GearFromForge.module.css";

import dumbbellImage from "../assets/Frame 31 (1).png";
import creatineImage from "../assets/creatine.png";
import shirtImage from "../assets/Frame 23 (2).png";
import bottleImage from "../assets/Frame 31 (2).png";

function getProducts() {
  return [
    {
      name: "50kg Dumbell",
      category: "Equipment",
      price: "₦25,400",
      image: dumbbellImage,
    },
    {
      name: "Creatine monohydrate",
      category: "Supplement",
      price: "₦25,400",
      image: creatineImage,
    },
    {
      name: "Fitness Tee shirt",
      category: "Apparel",
      price: "₦25,400",
      image: shirtImage,
    },
    {
      name: "Water bottle",
      category: "Equipment",
      price: "₦25,400",
      image: bottleImage,
    },
  ];
}

function GearFromForge() {
  return (
    <section className={styles.forge} id="shop">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2>
              GEAR FROM THE <span>FORGE</span>
            </h2>

            <p>
              Get your quality fitness products and equipment from prime fitness
            </p>
          </div>

          <a href="#shop" className={styles.viewAll}>
            View all items <span>⟶</span>
          </a>
        </div>

        <div className={styles.products}>
          {getProducts().map(function (product) {
            return (
              <article className={styles.product} key={product.name}>
                <div className={styles.imageBox}>
                  <img src={product.image} alt={product.name} />
                </div>

                <span className={styles.category}>{product.category}</span>

                <div className={styles.productInfo}>
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>

                <button
                  className={styles.cartButton}
                  type="button"
                  onClick={function () {
                    alert(product.name + " selected");
                  }}
                >
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default GearFromForge;
