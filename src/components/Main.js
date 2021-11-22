import React, { useState } from "react";
import FormModal from "./FormModal";
import styles from "./main-section.module.css";
import TaskBoard from "./TaskBoard";
function Main() {
  // create a function that will be passed as props to FormModal
  // function will take a object params {title:"" discription:"" completed:false}
  // and save it inside tasks(array) state varible.
  const [tasks, setTasks] = useState([]);
  // save index of tasks that should be edited
  const [edit, setEdit] = useState(null);
  const addTask = (obj) => {
    setTasks((state) => [...state, obj]);
  };
  const removeTask = (index) => {
    let filteredTasks = tasks.filter((item, itemIndex) => {
      return itemIndex !== index;
    });
    setTasks(filteredTasks);
  };
  // gets the index of the task that needs editing
  const getEditTaskIndex = (index) => {
    setEdit(index);
  };
  // resets index of the task
  const resetTask = () => {
    setEdit(null);
  };
  // edittaskfunc
  const editTaskFunc = (taskObj) => {
    let tasksClone = [...tasks];
    tasksClone[edit] = taskObj;
    setTasks(tasksClone);
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
      {/* task is the task that has to be edited */}
      <FormModal
        addTask={addTask}
        task={tasks[edit]}
        resetTask={resetTask}
        editTaskFunc={editTaskFunc}
      />
      <div>
        <TaskBoard
          name="Todo"
          tasksArray={tasks.filter((item) => {
            return item.complete === false;
          })}
          removeTask={removeTask}
          isComplete={isComplete}
          getEditTaskIndex={getEditTaskIndex}
        />

        <TaskBoard
          name="Completed"
          tasksArray={tasks.filter((item) => {
            return item.complete === true;
          })}
          removeTask={removeTask}
          isComplete={isComplete}
          getEditTaskIndex={getEditTaskIndex}
        />
      </div>
    </main>
  );
}

export default Main;
