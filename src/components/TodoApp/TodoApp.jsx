import { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editvalue, setEditValue] = useState(-1);


  const handleClick = (event) => {
     event.preventDefault()
     if(editvalue === -1) {
      setTodos([...todos,inputValue])
     } else {
      const updateTodo = [...todos]
      updateTodo[editvalue] = inputValue
      setTodos(updateTodo)
      setEditValue(-1)
     }
     setInputValue('')
  };


  const handleEdit = (index) => {
    const itemEdit = todos[index]
    setInputValue(itemEdit)
     setEditValue(index)
  }

  const handledelete = (index) => {
   let newtodo = [...todos]
     newtodo.splice(index,1) 
     setTodos(newtodo)
  }



  return (
    <>
      <div>
        <h2>Todo App</h2>
        <input
          type="text"
          placeholder="Type..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleClick}>
          {editvalue === -1 ? "ADD" : "EDIT"}
        </button>

        <div>
          {todos?.map((item, index) => (
            <ul key={index}>
              <li>{item}</li>
              <button onClick={() => handledelete(index)}>delete</button>
              <button onClick={() => handleEdit(index)}>edit</button>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoApp;
