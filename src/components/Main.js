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
  //
  const isComplete = (containerName, index) => {
    let tasksClone = [...tasks];
    if (containerName === "Todo") {
      tasksClone[index].complete = false;
      setTasks(tasksClone);
    } else {
      tasksClone[index].complete = true;
      setTasks(tasksClone);
    }
  };
  return (
    <main className={styles["main-section-container"]}>
      <h3>Tasks</h3>
      <FormModal addTask={addTask} />
      <div>
        <TaskBoard
          name="Todo"
          tasksArray={tasks.filter((item) => {
            return item.complete === false;
          })}
          removeTask={removeTask}
          isComplete={isComplete}
        />

        <TaskBoard
          name="Completed"
          tasksArray={tasks.filter((item) => {
            return item.complete === true;
          })}
          removeTask={removeTask}
          isComplete={isComplete}
        />
      </div>
    </main>
  );
}

export default Main;
