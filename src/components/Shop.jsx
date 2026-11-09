import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import styles from "./Shop.module.css";

import { addCartItem, getCartCount } from "../cart.js";

import dImage from "../assets/Frame 31 (2).png";
import bottleImage from "../assets/Frame 31 (1).png";
import teeImage from "../assets/Frame 23 (2).png";
import creatineImage from "../assets/creatine.png";
import bagImage from "../assets/Frame 23 (3).png";
import primeImage from "../assets/Frame 31 (3).png";
import muscleImage from "../assets/Frame 23 (8).png";
import ropeImage from "../assets/Frame 23 (9).png";
import kgImage from "../assets/Frame 23 (4).png";
import hoodieImage from "../assets/Frame 31 (4).png";

import shopHeroImage from "../assets/Frame 2147234617 (1).png";

const products = [
  {
    id: 1,
    name: "50kg Dumbell",
    category: "Equipment",
    price: 25400,
    image: dImage,
  },
  {
    id: 2,
    name: "Water Bottle",
    category: "Accessories",
    price: 25400,
    image: bottleImage,
  },
  {
    id: 3,
    name: "Fitness Tee-Shirt",
    category: "Apparel",
    price: 25400,
    image: teeImage,
  },
  {
    id: 4,
    name: "Creatine Monohydrate",
    category: "Supplement",
    price: 25400,
    image: creatineImage,
  },
  {
    id: 5,
    name: "Multipurpose Gym Bag",
    category: "Accessories",
    price: 25400,
    image: bagImage,
  },
  {
    id: 6,
    name: "Prime Men's Shorts",
    category: "Apparel",
    price: 25400,
    image: primeImage,
  },
  {
    id: 7,
    name: "Resistance Bands",
    category: "Equipment",
    price: 25400,
    image: muscleImage,
  },
  {
    id: 8,
    name: "Jump Ropes",
    category: "Equipment",
    price: 25400,
    image: ropeImage,
  },
  {
    id: 9,
    name: "15kg Kettle Bag",
    category: "Equipment",
    price: 25400,
    image: kgImage,
  },
  {
    id: 10,
    name: "Gym Hoodie",
    category: "Apparel",
    price: 24500,
    image: hoodieImage,
  },
];

const categories = [
  "ALL PRODUCTS",
  "Equipment",
  "Supplement",
  "Accessories",
  "Apparel",
];

function Shop() {
  const [activeCategory, setActiveCategory] = useState("ALL PRODUCTS");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [cartCount, setCartCount] = useState(getCartCount());
  const [cartMessage, setCartMessage] = useState("");

  const filteredProducts = products
    .filter((product) => {
      return (
        activeCategory === "ALL PRODUCTS" || product.category === activeCategory
      );
    })
    .filter((product) => product.price <= maxPrice)
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return a.id - b.id;
      }
    });

  function handleAddToCart(product) {
    const updatedCart = addCartItem({
      ...product,
      size: null,
      color: null,
      quantity: 1,
    });

    if (Array.isArray(updatedCart)) {
      setCartCount(
        updatedCart.reduce(
          (total, item) => total + (Number(item.quantity) || 0),
          0,
        ),
      );
    } else {
      setCartCount(getCartCount());
    }

    setCartMessage(`${product.name} added to cart`);

    window.setTimeout(() => {
      setCartMessage("");
    }, 2500);
  }

  function clearFilters() {
    setActiveCategory("ALL PRODUCTS");
    setMaxPrice(100000);
    setSortBy("featured");
  }

  return (
    <main className={styles.shopPage}>
      <section
        className={styles.shopHero}
        style={{ backgroundImage: `url("${shopHeroImage}")` }}
      >
        <div className={styles.heroOverlay}></div>

        <div className={styles.shopNavbar}>
          <Navbar />
        </div>

        <div className={styles.heroContent}>
          <h1>
            SHOP <span>QUALITY</span>
            <br />
            PRODUCTS
          </h1>

          <p>
            Supplements, apparel, equipment and accessories, tested by
            <br className={styles.desktopBreak} />
            our own coaches before it ever reaches this shelf.
          </p>
        </div>
      </section>

      <section className={styles.shopContent}>
        <div className={styles.sectionHeading}>
          <h2>PRODUCT TYPE</h2>
          <p>Explore our different product categories</p>
        </div>

        <div className={styles.toolbar}>
          <div className={styles.categoryFilters}>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`${styles.categoryButton} ${
                  activeCategory === category ? styles.activeCategory : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={styles.toolbarActions}>
            <label className={styles.sortControl}>
              <span className={styles.visuallyHidden}>Sort products</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
              >
                <option value="featured">Sort by</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </label>

            <button
              type="button"
              className={`${styles.filterButton} ${
                showFilters ? styles.filterButtonActive : ""
              }`}
              onClick={() => setShowFilters(!showFilters)}
              aria-expanded={showFilters}
            >
              Filter <span aria-hidden="true">▽</span>
            </button>
          </div>
        </div>

        {showFilters && (
          <div className={styles.filterPanel}>
            <label htmlFor="maxPrice">
              Maximum price: ₦{maxPrice.toLocaleString("en-NG")}
            </label>

            <input
              id="maxPrice"
              type="range"
              min="10000"
              max="100000"
              step="5000"
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
            />

            <button type="button" onClick={clearFilters}>
              Clear filters
            </button>
          </div>
        )}

        {cartMessage && (
          <p className={styles.cartMessage} role="status">
            {cartMessage}
          </p>
        )}

        <div className={styles.productGrid}>
          {filteredProducts.map((product) => (
            <article className={styles.productCard} key={product.id}>
              <Link
                to={`/product/${product.id}`}
                className={styles.productImageLink}
                aria-label={`View ${product.name}`}
              >
                <img
                  className={styles.productImage}
                  src={product.image}
                  alt={product.name}
                />
              </Link>

              <div className={styles.productInfo}>
                <p className={styles.productCategory}>{product.category}</p>

                <Link
                  to={`/product/${product.id}`}
                  className={styles.productName}
                >
                  {product.name}
                </Link>

                <p className={styles.productPrice}>
                  ₦{product.price.toLocaleString("en-NG")}
                </p>

                <button
                  className={styles.addToCartButton}
                  type="button"
                  onClick={() => handleAddToCart(product)}
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
                                    </span> Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length > 0 && (
          <div className={styles.pagination}>
            <span className={styles.results}>
              Showing 1–{filteredProducts.length} of {filteredProducts.length}{" "}
              results
            </span>

            <div className={styles.pageControls}>
              <button type="button" className={styles.pageButton} disabled>
                Previous
              </button>
              <button
                type="button"
                className={`${styles.pageButton} ${styles.active}`}
              >
                1
              </button>
              <button type="button" className={styles.pageButton} disabled>
                2
              </button>
              <button type="button" className={styles.pageButton} disabled>
                Next
              </button>
            </div>
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className={styles.emptyState}>
            <h3>No products found</h3>
            <p>Try another category or increase your maximum price.</p>
            <button type="button" onClick={clearFilters}>
              Show all products
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Shop;
