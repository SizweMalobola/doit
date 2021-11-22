import React from "react";
import styles from "./task-board.module.css";

function TaskBoard({
  name,
  tasksArray,
  removeTask,
  isComplete,
  getEditTaskIndex,
}) {
  return (
    <div
      className={styles["task-board-container"]}
      onDragOver={(e) => {
        //   prevent do not allow cursor
        e.preventDefault();
      }}
      onDrop={() => {
        const draggable = document.querySelector(`.${styles["dragging"]}`);
        isComplete(name, parseInt(draggable.dataset.index));
      }}
    >
      <div>
        <h1>{name}</h1>
        <span>{tasksArray.length}</span>
      </div>
      {tasksArray.map((obj, index) => {
        return (
          <div
            onDoubleClick={(e) => {
              // return index of task that needs editing
              getEditTaskIndex(index);
            }}
            onDragStart={(e) => {
              e.currentTarget.classList.add(styles["dragging"]);
            }}
            onDragEnd={(e) => {
              e.currentTarget.classList.remove(styles["dragging"]);
            }}
            draggable="true"
            key={index + obj.title}
            className={styles["task"]}
            data-index={index}
          >
            {/* edit */}
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
