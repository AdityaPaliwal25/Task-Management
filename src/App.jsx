import React from 'react'
import { useState ,useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import MyTasks from './pages/MyTasks/MyTasks'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import CalendarView from './pages/Calendar/CalendarView'
import RecurTask from './pages/RecurTask/RecurTask'
import Reports from './pages/Reports/Reports'
import Teams from './pages/Teams/Teams'
import Setting from './pages/SettingPage/Setting'
import TaskDetails from './pages/DetailsPage/TaskDetails'

function App() {
  // const addTask = async (newTask) => {
  //   try {
  //     const res = await axios.post("http://localhost:8080/api/task", newTask);
  //     setTasks(prev => [...prev, res.data]);
  //   } catch (err) {
  //     console.error("Error saving task:", err);
  //   }
  // };
  // const todayDate = new Date().toISOString().split("T")[0];
  // console.log("today",todayDate);
    const [tasks, setTasks] = useState([]);
    // [
    //   { id: uuidv4(), title: "Design Homepage", assignee: "Alice Johnson", priority: "High", status: "Completed", startDate: todayDate, dueDate: "2025-03-29", subtasks: { completed: 1, total: 4 }, recurring: false },
    //   { id: uuidv4(), title: "Deploy to Production", assignee: "Alice Johnson", priority: "Low", status: "To Do", startDate: todayDate, dueDate: "2025-04-15", subtasks: { completed: 0, total: 3 }, recurring: false },
    //   { id: uuidv4(), title: "Write Documentation", assignee: "Alice Johnson", priority: "Low", status: "In Progress", startDate: todayDate, dueDate: "2025-04-05", subtasks: { completed: 3, total: 3 }, recurring: false },
    //   { id: uuidv4(), title: "Create API Endpoints", assignee: "Charlie Smith", priority: "High", status: "To Do", startDate: todayDate, dueDate: "2025-04-02", subtasks: { completed: 2, total: 5 }, recurring: false },
    //   { id: uuidv4(), title: "Improve UI", assignee: "David Brown", priority: "Medium", status: "To Do", startDate: todayDate, dueDate: "2025-04-07", subtasks: { completed: 0, total: 1 }, recurring: false },
    //   { id: uuidv4(), title: "Test Payment Gateway", assignee: "Bob Williams", priority: "Low", status: "In Progress", startDate: todayDate, dueDate: "2025-04-12", subtasks: { completed: 1, total: 4 }, recurring: false },
    //   { id: uuidv4(), title: "Security Audit", assignee: "Charlie Smith", priority: "High", status: "To Do", startDate: todayDate, dueDate: "2025-04-13", subtasks: { completed: 0, total: 2 }, recurring: false },
    //   { id: uuidv4(), title: "Optimize Database", assignee: "Charlie Smith", priority: "High", status: "To Do", startDate: todayDate, dueDate: "2025-04-10", subtasks: { completed: 0, total: 2 }, recurring: false },
    //   { id: uuidv4(), title: "Setup CI/CD Pipeline", assignee: "David Brown", priority: "High", status: "To Do", startDate: todayDate, dueDate: "2025-04-14", subtasks: { completed: 1, total: 5 }, recurring: false },
    // ]
  return (
    <div className="app-container">
      {/* <ThemeToggle /> */}
      <Sidebar />
      <Routes>
        <Route path='/' element={<Dashboard tasks={tasks} setTasks={setTasks}/>}/>  
        <Route path="/MyTasks" element={<MyTasks tasks={tasks} setTasks={setTasks}/>} />
        <Route path="/Calendar" element={<CalendarView tasks={tasks} />} />
        <Route path="/Teams" element={<Teams tasks={tasks} />} />
        <Route path="/Reports" element={<Reports tasks={tasks} />} />
        <Route path="/RecurTask" element={<RecurTask tasks={tasks} />} />
        <Route path="/Setting" element={<Setting tasks={tasks} />} />
        <Route path="/task/:taskId" element={<TaskDetails/>} />
      </Routes>
    </div>
  )
}

export default App