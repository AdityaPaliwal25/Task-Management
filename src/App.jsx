import React from 'react'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import MyTasks from './pages/MyTasks/MyTasks'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import CalendarView from './pages/Calendar/CalendarView'
import Reports from './pages/Reports/Reports'
import Teams from './pages/Teams/Teams'
import { v4 as uuidv4 } from 'uuid';
function App() {
  let todayDate = new Date().toISOString().split("T")[0];
  console.log("today",todayDate);
    const [tasks, setTasks] = useState([
      {
        id:uuidv4(),
        title: "Title1",
        description: "",
        startDate: todayDate,
        dueDate: "2025-03-27",
        assignee: "",
        priority: "Medium",
        status: "To Do", // Default status
        subtasks: { completed: 0, total: 0 },
        recurring: false, // Default false
      }, {
        id:uuidv4(),
        title: "Title2",
        description: "",
        startDate: todayDate,
        dueDate: "2025-03-30",
        assignee: "",
        priority: "Medium",
        status: "To Do", // Default status
        subtasks: { completed: 0, total: 0 },
        recurring: false, // Default false
      }
    ]);
  return (
    <div className="app-container">
      <Sidebar />
      
      <Routes>
        <Route path='/' element={<Dashboard tasks={tasks} setTasks={setTasks}/>}/>  
        <Route path="/MyTasks" element={<MyTasks tasks={tasks} setTasks={setTasks}/>} />
        <Route path="/Calendar" element={<CalendarView tasks={tasks} />} />
        <Route path="/Teams" element={<Teams tasks={tasks} />} />
        <Route path="/Reports" element={<Reports tasks={tasks} />} />

        
      </Routes>
    </div>
  )
}

export default App