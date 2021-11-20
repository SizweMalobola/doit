import React, { useState } from "react";
import FormModal from "./FormModal";
import styles from "./main-section.module.css";
function Main() {
  // create a function that will be passed as props to FormModal
  // function will take a object params {title:"" discription:"" completed:false}
  // and save it inside tasks(array) state varible.
  const [tasks, setTasks] = useState([]);
  const addTask = (obj) => {
    // set index on every individual task
    obj.index = tasks.length - 1 < 0 ? 0 : tasks.length - 1;
    setTasks((state) => [...state, obj]);
  };
  console.log(tasks);
  return (
    <main className={styles["main-section-container"]}>
      <h3>Tasks</h3>
      <FormModal addTask={addTask} />
    </main>
  );
}

export default Main;
