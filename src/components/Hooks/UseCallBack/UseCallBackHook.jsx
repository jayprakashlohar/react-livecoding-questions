import { useCallback, useState } from "react";
import TodoApp from "./TodoApp";

const UseCallBackHook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(() => {
    setTodos((todo) => [...todo]);
  }, [todos]);

  return (
    <>
      <div>
        <div>
          <h2>Count App</h2>
          <h4>Count : {count}</h4>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <TodoApp todos={todos} addTodo={addTodo} />
      </div>
    </>
  );
};

export default UseCallBackHook;
