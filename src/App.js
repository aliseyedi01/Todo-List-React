import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import ToDoTask from "./components/ToDoTask";

function App() {
  const [toDo, setToDo] = useState([
    { id: 1, title: "book1", status: true },
    { id: 2, title: "book2", status: true },
  ]);

  return (
    <div className="container App  d-flex justify-content-center align-items-center   ">
      <div className=" d-flex flex-column justify-content-center align-items-center w-50 ">
        <ToDoTask toDo={toDo} />
      </div>
    </div>
  );
}

export default App;
