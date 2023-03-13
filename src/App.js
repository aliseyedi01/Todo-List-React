import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ToDoTask from "./components/ToDoTask";
import AddTask from "./components/AddTask";

function App() {
  // State
  const [toDo, setToDo] = useState([
    { id: 1, title: "book1", status: false },
    { id: 2, title: "book2", status: true },
  ]);

  const [newTask, setNewTask] = useState("");

  // check Done Task
  const CheckTask = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  // Delete Task
  const DeleteTask = (id) => {
    let newTask = toDo.filter((task) => task.id !== id);
    setToDo(newTask);
  };

  // Add Task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  return (
    <div className=" vh-100 vw-100  d-flex justify-content-center align-items-center bg-success  ">
      <div className=" w-50 d-flex flex-column justify-content-center align-items-center  ">
        {/* Add Task */}
        <AddTask newTask={newTask} setNewTask={setNewTask} addTask={addTask} />

        {/* No Task Warning */}
        {toDo && toDo.length ? "" : "No Task ..."}

        {/* ToDo Task */}
        <ToDoTask toDo={toDo} checkTask={CheckTask} delTask={DeleteTask} />
      </div>
    </div>
  );
}

export default App;
