import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styles from "./styles/navbar.module.css";
import { useContext } from "react";
import { AppContext } from "./App";

export default function Navbar() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <>
      <div className={styles.logo}>aita</div>
      <nav>
        <NavLink to="/aita">Home</NavLink>
        <NavLink to="drill-maker">Drill Maker</NavLink>
      </nav>
      {state.isMenuOpen ? (
        ""
      ) : (
        <GiHamburgerMenu
          className={styles.icon}
          size="25px"
          onClick={() => dispatch({ type: "SHOW_NAV_MENU" })}
        />
      )}
    </>
  );
}
