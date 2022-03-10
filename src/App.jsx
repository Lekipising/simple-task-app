import "./App.css";
import CreateTask from "./components/createTask";
import ViewAll from "./components/viewAll";
import React, { useState } from "react";

function App() {
  const [wasSuccessful, setWasSuccessful] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  return (
    <main>
      <section className="view">
        <CreateTask
          wasSuccessful={() => setWasSuccessful(!wasSuccessful)}
          editingTask={editingTask}
        />
        <ViewAll
          refresh={wasSuccessful}
          editing={(val) => setEditingTask(val)}
        />
      </section>
    </main>
  );
}

export default App;
