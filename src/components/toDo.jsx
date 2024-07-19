import React, { useState } from 'react';
import './toDo.css'

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    if (editIndex === -1) {
      setTasks([...tasks, newTask]);
    } else {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
      setEditIndex(-1);
    }
    setNewTask('');
  };

  const handleEditTask = (index) => {
    setNewTask(tasks[index]);
    setEditIndex(index);
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1 id="title">Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTask}>
          {editIndex === -1 ? 'Add Task' : 'Update Task'}
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span>{task}</span>
            <div className="button-container">
              <button onClick={() => handleEditTask(index)}>Edit</button>
              <button onClick={() => handleRemoveTask(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
