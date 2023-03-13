import React from "react";

const AddTask = ({ newTask, setNewTask, addTask }) => {
  return (
    <div className="w-50 h-50  input-group mb-3">
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} type="text" className="form-control" placeholder="Add New Task" />
      <span className="input-group-text text-bg-primary " role="button" onClick={addTask}>
        Add Task
      </span>
    </div>
  );
};
export default AddTask;
