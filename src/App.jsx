import React from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import MyTask from './pages/MyTask/MyTask'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Calender from './pages/Calender/Calender'
function App() {
  return (
    <div className="app-container">
      <Sidebar />
      
      <Routes>
        <Route path='/' element={<Dashboard/>}/>  
        <Route path="/MyTask" element={<MyTask />} />
        <Route path="Calender" element={<Calender />} />
        
      </Routes>
    </div>
  )
}

export default App