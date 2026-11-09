import styles from "./Navbar.module.css";
import primeLogo from "../assets/watermarked_img_7591326214474801284 1 (1).png";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <header className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src={primeLogo} alt="Prime Fitness" className={styles.logoImage} />
      </Link>

      <nav className={styles.navLinks}>
        <Link to="/" className={location.pathname === "/" ? styles.active : ""}>
          Home
        </Link>

        <Link to="/#about">About us</Link>

        <Link to="/#programs">Our Programs</Link>

        <Link
          to="/shop"
          className={location.pathname === "/shop" ? styles.active : ""}
        >
          Shop
        </Link>

        <Link to="/#footer">Blog</Link>
      </nav>

      <div className={styles.navActions}>
        <Link to="/shop" className={styles.cart} aria-label="Shopping cart">
          🛒
        </Link>

        <Link to="/#contact" className={styles.consultButton}>
          Book Consultation
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
