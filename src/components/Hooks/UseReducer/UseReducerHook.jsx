import { useReducer } from "react";

const initialTodos = [
  { id: 1, title: "todos1", complete: false },
  { id: 2, title: "todos2", complete: false },
  { id: 3, title: "todos3", complete: false },
  { id: 4, title: "todos4", complete: false },
  { id: 5, title: "todos5", complete: false },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.complete}
                  onChange={() => handleComplete(todo)}
                />
              </label>
              {todo.title}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UseReducerHook;
