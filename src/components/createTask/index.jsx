import React, { useEffect, useState } from "react";
import message from "../others/message";
import "./index.css";

export default function CreateTask({ wasSuccessful, editingTask }) {
  const [title, setTitle] = useState("");
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const [description, setDescription] = useState("");
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    const existingTasks = JSON.parse(localStorage.getItem("tasks"));
    const newTasks = existingTasks
      ? [...existingTasks, { title: title, desc: description, id: Date.now() }]
      : [{ title: title, desc: description, id: Date.now() }];
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    message("success", "Task created successfully");
    setDescription("");
    setTitle("");
    wasSuccessful();
  };

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.desc);
    }
  }, [editingTask]);
  return (
    <div className="create">
      <form>
        <label htmlFor="title">Task Title</label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => onChangeTitle(e)}
          className="title"
        />

        <label htmlFor="desc">Task Title</label>
        <textarea
          name="desc"
          placeholder="Task description"
          value={description}
          onChange={(e) => onChangeDescription(e)}
          className="desc"
        />

        <button
          type="submit"
          name="submit"
          onClick={(e) => onSubmit(e)}
          disabled={title.length <= 5 || description <= 10}
        >
          Create Task
        </button>
      </form>
    </div>
  );
}