import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

const Todo = ({ children }) => {
  const [activeNav, setActiveNav] = useState("all");
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleActiveNav = (e) => {
    setActiveNav(e.target.dataset.name);
  };

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("dc-todo")) || [];

    tasks.length !== 0 && setTasks(tasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("dc-todo", JSON.stringify(tasks));
  }, [tasks]);

  const handleType = (e) => setTask(e.target.value);

  const handleSubmit = () =>
    setTasks((prev) => {
      if (task === "") return prev;

      return (
        setTask(""), [...prev, { id: Date.now(), name: task, completed: false }]
      );
    });

  const handleComplete = (e) => {
    const id = e.target.id;

    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === Number(id)) task.completed = e.target.checked;

        return task;
      })
    );
  };

  const handleDelete = (e) => {
    const id = e.target.dataset.id;

    setTasks((prevTasks) => prevTasks.filter((task) => Number(id) !== task.id));
  };

  const value = {
    navigation: { activeNav, handleActiveNav },
    addTask: { task, handleType, handleSubmit },
    tasks: { tasks, activeNav, handleComplete, handleDelete },
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default Todo;
