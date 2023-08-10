import { useReducer } from "react";

// const initialTodos = [
//   { id: 1, title: "todos1", complete: false },
//   { id: 2, title: "todos2", complete: false },
//   { id: 3, title: "todos3", complete: false },
//   { id: 4, title: "todos4", complete: false },
//   { id: 5, title: "todos5", complete: false },
// ];

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "COMPLETE":
//       return state.map((todo) => {
//         if (todo.id === action.id) {
//           return { ...todo, complete: !todo.complete };
//         } else {
//           return todo;
//         }
//       });
//     default:
//       return state;
//   }
// };

// const UseReducerHook = () => {
//   const [todos, dispatch] = useReducer(reducer, initialTodos);

//   const handleComplete = (todo) => {
//     dispatch({ type: "COMPLETE", id: todo.id });
//   };

//   return (
//     <>
//       <div>
//         {todos.map((todo) => {
//           return (
//             <div key={todo.id}>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={todo.complete}
//                   onChange={() => handleComplete(todo)}
//                 />
//               </label>
//               {todo.title}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default UseReducerHook;

let initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    case "reset":
      return 0;
    default:
        throw new Error("Unexpected action");
  }
};

const UseReducerHook = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h2>Count : {count}</h2>
        <button onClick={() => dispatch("add")}>ADD</button>
        <button onClick={() => dispatch("subtract")}>SUBTRACT</button>
        <button onClick={() => dispatch("reset")}>RESET</button>
      </div>
    </>
  );
};

export default UseReducerHook;
