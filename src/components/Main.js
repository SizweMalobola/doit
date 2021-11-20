import React, { useState } from "react";
import FormModal from "./FormModal";
import styles from "./main-section.module.css";
import TaskBoard from "./TaskBoard";
function Main() {
  // create a function that will be passed as props to FormModal
  // function will take a object params {title:"" discription:"" completed:false}
  // and save it inside tasks(array) state varible.
  const [tasks, setTasks] = useState([]);
  const addTask = (obj) => {
    setTasks((state) => [...state, obj]);
  };
  const removeTask = (index) => {
    let filteredTasks = tasks.filter((item, itemIndex) => {
      return itemIndex !== index;
    });
    setTasks(filteredTasks);
  };
  return (
    <main className={styles["main-section-container"]}>
      <h3>Tasks</h3>
      <FormModal addTask={addTask} />
      <TaskBoard name="Todo" tasksArray={tasks} removeTask={removeTask} />
    </main>
  );
}

export default Main;
