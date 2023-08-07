import { memo } from "react";
import propTypes from "prop-types";

const TodoApp = ({ todos, addTodo }) => {
  console.log("child running");
  return (
    <>
      <div>
        <h2>Todo App</h2>
        {todos?.map((item, index) => (
          <div key={index}>{item}</div>
        ))}

        <button onClick={addTodo}>addTodo</button>
      </div>
    </>
  );
};

TodoApp.propTypes = {
  todos: propTypes.string,
  addTodo: propTypes.func,
};

export default memo(TodoApp);
