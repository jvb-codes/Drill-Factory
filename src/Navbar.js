import styles from "./styles/navbar.module.css";

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className={styles.grid}>
      <p>Teacher Assistant</p>
      <div
        className={`material-symbols-outlined ${
          isMenuOpen ? styles["menu-hidden"] : styles["menu-visible"]
        }`}
        onClick={() => setIsMenuOpen(true)}
      >
        Menu
      </div>
    </nav>
  );
}
