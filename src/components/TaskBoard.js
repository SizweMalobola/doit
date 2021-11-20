import React from "react";
import styles from "./task-board.module.css";

function TaskBoard({ name, tasksArray, removeTask }) {
  return (
    <div className={styles["task-board-container"]}>
      <div>
        <h1>{name}</h1>
        <span>{tasksArray.length}</span>
      </div>
      {/* pass tasks that are not complete */}
      {/* <pre>{JSON.stringify(tasksArray)}</pre> */}
      {tasksArray.map((obj, index) => {
        return (
          <div
            draggable="true"
            key={index + obj.title}
            className={styles["task"]}
            data-index={index}
          >
            <h4>{obj.title}</h4>
            <p>{obj.description}</p>
            <button onClick={() => removeTask(index)}>X</button>
          </div>
        );
      })}
    </div>
  );
}

export default TaskBoard;
