import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    assignee: "",
    priority: "Medium",
    status: "To Do", // Default status
    subtasks: { completed: 0, total: 0 },
    recurring: false, // Default false
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim()) return;
    onAddTask(task); // Send task to parent (TaskBoard)
    setTask({ title: "", description: "", dueDate: "", assignee: "", priority: "Medium", status: "To Do", subtasks: { completed: 0, total: 0 }, recurring: false }); // Reset form
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>+ Create New Task</h2>
        <form onSubmit={handleSubmit}>
          <label>Task Title</label>
          <input type="text" name="title" placeholder="Enter task title" value={task.title} onChange={handleChange} required />

          <label>Description</label>
          <textarea name="description" placeholder="Enter task description" value={task.description} onChange={handleChange}></textarea>

          <label>Due Date</label>
          <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} />

          <label>Assignee</label>
          <select name="assignee" value={task.assignee} onChange={handleChange}>
            <option value="">Select assignee</option>
            <option value="John Doe">John Doe</option>
            <option value="Jane Smith">Jane Smith</option>
          </select>

          <label>Priority</label>
          <select name="priority" value={task.priority} onChange={handleChange}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <button type="submit" className="btn-create">Create Task</button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
