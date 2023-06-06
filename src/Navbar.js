import styles from "./styles/navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className={styles.grid}>
      <div>aita</div>
      {isMenuOpen ? (
        ""
      ) : (
        <GiHamburgerMenu size="25px" onClick={() => setIsMenuOpen(true)} />
      )}
    </nav>
  );
}
