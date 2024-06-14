"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toogleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <Link className={styles.logo} href={"#"}>
        Company logo
      </Link>
      <div className={styles.link_container}>
        <Link className={styles.link} href={"#"}>
          About
        </Link>
        <Link className={styles.link} href={"#"}>
          Gallery
        </Link>
        <Link className={styles.link} href={"#"}>
          Contact
        </Link>
        <Link className={styles.link} href={"#"}>
          Buy
        </Link>
      </div>
      <div className={styles.menu_container}>
        <button className={styles.menu_button} onClick={toogleMenu}>
          {menuOpen ? "Close" : "Menu"}
        </button>
        <div
          className={
            menuOpen
              ? styles.background_click_open
              : styles.background_click_close
          }
          onClick={toogleMenu}
        ></div>
        <div
          className={
            menuOpen ? styles.menu_items_open : styles.menu_items_close
          }
        >
          <Link className={styles.link} href={"#"}>
            About
          </Link>
          <Link className={styles.link} href={"#"}>
            Gallery
          </Link>
          <Link className={styles.link} href={"#"}>
            Contact
          </Link>
          <Link className={styles.link} href={"#"}>
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
}
