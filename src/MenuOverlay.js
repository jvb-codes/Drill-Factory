import styles from "./styles/overlay.module.css";
import { useContext } from "react";
import { AppContext } from "./App";

export default function MenuOverlay() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <section
      className={`${styles.grid} ${
        state.isMenuOpen ? styles["menu-visible"] : styles["menu-hidden"]
      }`}
    >
      <div
        onClick={() => dispatch({ type: "HIDE_NAV_MENU" })}
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
