import React from "react";
import styles from "./add-task-button.module.css";
function AddTaskButton() {
  // this function toggles the display for the form for adding tasks
  function toggleForm() {
    let targetElement = document.querySelector("#form-modal");
    if (targetElement.style.display === "flex") {
      targetElement.style.display = "none";
    } else {
      targetElement.style.display = "flex";
    }
  }

  return (
    <button className={styles["task-button"]} onClick={toggleForm}>
      +
    </button>
  );
}

export default AddTaskButton;
