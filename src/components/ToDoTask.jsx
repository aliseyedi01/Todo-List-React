import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ToDoTask = ({ toDo, checkTask }) => {
  return (
    <>
      {toDo &&
        toDo
          .sort((a, b) => {
            return a.id > b.id ? 1 : -1;
          })
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="d-flex w-50 flex-row justify-content-between align-content-center p-2 text-bg-primary m-1 rounded">
                  {/* Left */}
                  <div className="d-flex flex-row align-items-center ">
                    <div className={task.status ? "text-decoration-line-through , opacity-50" : ""}>
                      <span className="rounded text-bg-light px-1 py-0 ">{index + 1}</span>
                      <span className="px-1 text-capitalize">{task.title}</span>
                    </div>
                  </div>
                  {/* right */}
                  <div className="d-flex flex-row gap-2 ">
                    <span
                      title="Done"
                      role="button"
                      onClick={() => {
                        checkTask(task.id);
                      }}
                    >
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>

                    <span title="Edit" role="button">
                      <FontAwesomeIcon icon={faPen} />
                    </span>

                    <span title="Remove" role="button">
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </>
  );
};

export default ToDoTask;
