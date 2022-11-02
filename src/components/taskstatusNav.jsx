import { useContext } from "react";
import { TodoContext } from "./../context/todoContext";

const TodoNavigation = () => {
  const {
    navigation: { activeNav, handleActiveNav },
  } = useContext(TodoContext);
  const navNames = ["all", "active", "completed"];

  return (
    <nav className="todo-navigation">
      {navNames.map((name, i) => (
        <span
          key={i}
          data-name={name}
          onClick={handleActiveNav}
          className={name === activeNav ? "active" : ""}
        >
          {name}
        </span>
      ))}
    </nav>
  );
};

export default TodoNavigation;
