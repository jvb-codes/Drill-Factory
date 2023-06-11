import styles from "../styles/navbar.module.css";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <>
      <header className={styles.grid}>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
