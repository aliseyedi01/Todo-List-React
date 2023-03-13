const UpdateTask = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
  return (
    <div className=" col col-md-6 h-50 input-group mb-1">
      <input
        value={updateData && updateData.title}
        onChange={(e) => {
          changeTask(e);
        }}
        type="text"
        className="form-control"
        placeholder="Update Task"
      />
      <span className="input-group-text text-bg-warning" onClick={updateTask} role="button">
        Update
      </span>
      <span className="input-group-text text-bg-info" onClick={cancelUpdate} role="button">
        Cancel
      </span>
    </div>
  );
};

export default UpdateTask;
