const TaskList = ({ tasks }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, i) => (
        <li className="task" key={i}>
          <input type="checkbox" id={task.id} />
          <label htmlFor={task.id}>{task.name}</label>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
