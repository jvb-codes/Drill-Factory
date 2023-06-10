import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./styles/navbar.module.css";
import { useContext } from "react";
import { AppContext } from "./App";

export default function Navbar() {
  const { state, dispatch } = useContext(AppContext);

  const location = useLocation();
 
  const handleStyles = (path) => {
    return location.pathname === path ? "active-nav-link" : ""
  }

  return (
    <>
      <div className={styles.logo}>aita</div>
      <nav>
        <NavLink className={handleStyles("/aita")} to="/aita">Home</NavLink>
        <NavLink className={handleStyles("/aita/drill-maker")} to="drill-maker">Drill Maker</NavLink>
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
