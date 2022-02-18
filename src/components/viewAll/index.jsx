import React, { useEffect, useState } from "react";
import "./index.css";

export default function ViewAll({ refresh, editing }) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    // reverse the array
    localStorage.getItem("tasks") &&
      setTasks(JSON.parse(localStorage.getItem("tasks")).reverse());
  }, [refresh]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const onEdit = (task) => {
    editing(task);
  };
  const onDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };
  return (
    <div className="tasksall">
      {tasks ? (
        tasks.length === 0 ? (
          <h1>No tasks, create on the left</h1>
        ) : (
          tasks.map((item, index) => (
            <div className="task" key={index}>
              <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
              </div>
              <div className="actions">
                <button className="btn" onClick={() => onEdit(item)}>
                  Edit
                </button>
                <button className="btn" onClick={() => onDelete(item.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
