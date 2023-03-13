import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ToDoTask from "./components/ToDoTask";

function App() {
  const [toDo, setToDo] = useState([
    { id: 1, title: "book1", status: false },
    { id: 2, title: "book2", status: true },
  ]);

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

  return (
    <div className="container App  d-flex justify-content-center align-items-center   ">
      <div className=" d-flex flex-column justify-content-center align-items-center w-50 ">
        <ToDoTask toDo={toDo} checkTask={CheckTask} />
      </div>
    </div>
  );
}

export default App;
