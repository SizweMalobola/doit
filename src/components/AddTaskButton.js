import React from "react";
import styles from "./add-task-button.module.css";
function AddTaskButton() {
  // this function toggles the display for the form for adding tasks
  function toggleForm() {}

  return (
    <button className={styles["task-button"]} onClick={toggleForm}>
      +
    </button>
  );
}

export default AddTaskButton;
