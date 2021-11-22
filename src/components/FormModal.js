import React, { useEffect, useRef, useState } from "react";
import styles from "./form-modal.module.css";

function FormModal(props) {
  // create a state variable that will store the values the title and description
  const [title, setTitle] = useState(null);
  const [editTask, setEditTask] = useState(null);
  const [description, setDescription] = useState(null);
  let titleRef = useRef(null);
  let descriptionRef = useRef(null);
  let formModalRef = useRef(null);
  useEffect(() => {
    if (props.task) {
      formModalRef.current.style.display = "flex";
      setEditTask({ ...props.task });
    }
  }, [props.task]);
  return editTask ? (
    <form
      id="form-modal"
      ref={formModalRef}
      className={styles["form-container"]}
    >
      <h1>Edit Task</h1>
      <input
        type="text"
        placeholder="Give your task a title"
        ref={titleRef}
        value={editTask.title}
        onChange={(e) => {
          setEditTask((state) => {
            return { ...state, title: e.target.value };
          });
        }}
      />
      <textarea
        rows="5"
        placeholder="Description for your task"
        ref={descriptionRef}
        value={editTask.description}
        onChange={(e) => {
          setEditTask((state) => {
            return { ...state, description: e.target.value };
          });
        }}
      />
      <button
        onClick={(e) => {
          // prevent page refresh
          e.preventDefault();
          if (editTask.title && editTask.description) {
            //if both form inputs are present save object
            props.editTaskFunc(editTask);
            // reset task value
            props.resetTask();
            setEditTask(null);
            titleRef.current.value = null;
            descriptionRef.current.value = null;
            // hide form modal
            formModalRef.current.style.display = "none";
          }
        }}
      >
        Done
      </button>
    </form>
  ) : (
    <form
      id="form-modal"
      ref={formModalRef}
      className={styles["form-container"]}
    >
      <h1>Add Task</h1>
      <input
        type="text"
        placeholder="Give your task a title"
        ref={titleRef}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        rows="5"
        placeholder="Description for your task"
        ref={descriptionRef}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          // prevent page refresh
          e.preventDefault();
          if (titleRef.current.value && descriptionRef.current.value) {
            //if both form inputs are present save object
            props.addTask({
              title: title,
              description: description,
              complete: false,
            });
            // reset input values
            titleRef.current.value = null;
            descriptionRef.current.value = null;
            // hide form modal
            formModalRef.current.style.display = "none";
          }
        }}
      >
        Done
      </button>
    </form>
  );
}

export default FormModal;
