import React from "react";
import styles from "./form-modal.module.css";

function FormModal() {
  return (
    <form id="form-modal" className={styles["form-container"]}>
      <h1>Add Task</h1>
      <input type="text" placeholder="Give your task a title" required={true} />
      <textarea rows="5" placeholder="Description for your task" />
      <button>Done</button>
    </form>
  );
}

export default FormModal;
