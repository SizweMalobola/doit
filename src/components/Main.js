import React from "react";
import FormModal from "./FormModal";
import styles from "./main-section.module.css";
function Main() {
  return (
    <main className={styles["main-section-container"]}>
      <h3>Tasks</h3>
      <FormModal />
    </main>
  );
}

export default Main;
