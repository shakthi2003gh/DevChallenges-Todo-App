import { useContext } from "react";
import { TodoContext } from "./../context/todoContext";

const TaskList = () => {
  const {
    tasks: { tasks, activeNav, handleComplete, handleDelete, handleDeleteAll },
  } = useContext(TodoContext);

  return (
    <ul className="task-list">
      {tasks
        .filter((task) =>
          activeNav === "all"
            ? true
            : activeNav === "completed"
            ? task.completed
            : !task.completed
        )
        .map((task, i) => (
          <li className="task" key={i}>
            <input
              type="checkbox"
              id={task.id}
              checked={task.completed}
              onChange={handleComplete}
            />
            <label htmlFor={task.id}>{task.name}</label>

            <span
              className="material-symbols-outlined"
              onClick={handleDelete}
              data-id={task.id}
            >
              delete
            </span>
          </li>
        ))}

      {activeNav === "completed" &&
        tasks.filter((t) => t.completed).length !== 0 && (
          <button onClick={handleDeleteAll}>
            <span className="material-symbols-outlined">delete</span>Delete All
          </button>
        )}
    </ul>
  );
};

export default TaskList;
