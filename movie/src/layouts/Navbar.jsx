import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <i class="fa-solid fa-film"></i>
      <Link className={styles.icon} to="/">
        Movie Organizer
      </Link>
    </div>
  );
};
