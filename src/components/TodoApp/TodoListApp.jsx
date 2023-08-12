import { useState } from "react";

function TodoListApp() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState(""); 

  const handleAddTask = () => {
    if (taskInput.trim() === "") {
      return; 
    }

    const newTask = {
      id: Date.now(),
      text: taskInput, 
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput(""); 
  };

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list-app">
      <h1>Todo List App</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter task"
          value={taskInput} 
          onChange={(e) => setTaskInput(e.target.value)} 
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
            />
            <span className={task.completed ? "completed" : ""}>
              {task.text}
            </span>
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListApp;
