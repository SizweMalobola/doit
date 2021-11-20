import React from "react";
import styles from "./header.module.css";
function Header() {
  return (
    <header className={styles["header-container"]}>
      <h1>Doit.</h1>
    </header>
  );
}

export default Header;
