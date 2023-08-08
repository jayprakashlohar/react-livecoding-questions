import { useMemo } from "react";
import { useState } from "react";

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  let calculation = useMemo(() => expansieveCalulation(count),[count]);

  const handleInc = () => {
    setCount((count) => count + 1);
  };

  const addTodo = () => {
    setTodos((todo) => [...todo, "new todos"]);
  };

  return (
    <>
      <div>
        <h1>Todo </h1>
        {todos?.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
        <button onClick={addTodo}>Add Todos</button>
      </div>
      <hr />
      <div>
        <h1>Counter App</h1>
        <h2>Count : {count}</h2>
        <button onClick={() => handleInc()}>INC</button>
        <h3>Expansieve Calculation</h3>
        {calculation}
      </div>
    </>
  );
};

const expansieveCalulation = (num) => {
  console.log("calculating...");
  for (let i = 0; i < 100000000; i++) {
    num += 1;
  }
  return num;
};

export default UseMemoHook;
