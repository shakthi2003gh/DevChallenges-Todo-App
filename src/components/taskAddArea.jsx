import { useContext } from "react";
import { TodoContext } from "./../context/todoContext";

const TaskInputSection = () => {
  const {
    addTask: { task, handleType, handleSubmit },
  } = useContext(TodoContext);

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="add details"
        value={task}
        onChange={handleType}
      />

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default TaskInputSection;
