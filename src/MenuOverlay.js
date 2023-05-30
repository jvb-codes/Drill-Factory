import styles from "./styles/overlay.module.css";

export default function MenuOverlay({ isMenuOpen, setIsMenuOpen }) {
  return (
    <section
      className={`${styles.grid} ${
        isMenuOpen ? styles["menu-visible"] : styles["menu-hidden"]
      }`}
    >
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`material-symbols-outlined ${styles["menu-close"]}`}
      >
        close
      </div>
      <ul className={styles["menu-list"]}>
        <li>Dictionary</li>
        <li>Thesaurus</li>
        <li>Drill Maker</li>
      </ul>
    </section>
  );
}
