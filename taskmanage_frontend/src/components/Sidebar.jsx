import React, { useState } from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: 'fa-house', path :"/" },
    { name: 'My Tasks', icon: 'fa-list-check' ,path:"/MyTasks"},
    { name: 'Calendar', icon: 'fa-calendar' ,path:"/Calendar"},
    { name: 'Reports', icon: 'fa-chart-line',path:"/Reports" },
    { name: 'Teams', icon: 'fa-users',path:"/Teams" },
    { name: 'Templates', icon: 'fa-file-lines' ,path:"/Templates"},
    { name: 'Recurring Tasks', icon: 'fa-repeat',path:"/RecurTask"},
    { name: 'Settings', icon: 'fa-gear',path:"/Setting"},
  ];
  const navigate = useNavigate();

  return (
    <div className="main_box">
    <input type="checkbox" id="check" />
      <div className="btn_one">
        <label htmlFor="check" style={{color:"white"}}>
          <i className="fa-solid fa-bars"></i>
        </label>
      </div>
    <nav className="sidebar_menu">
      <input type="checkbox" id="check" />
      {/* <div className="btn_one">
        <label htmlFor="check" style={{color:"white"}}>
          <i className="fa-solid fa-bars"></i>
        </label>
      </div> */}
      <div className="logo">     
        <h2> <i className="fa-solid fa-square-check"></i> Sort</h2>
         <div className="btn_two">
          <label htmlFor="check">
            <i className="fa-solid fa-xmark"></i>
          </label>
        </div>
      </div>
      
      <ul className="nav-items">
        {navItems.map((item) => (
          <li 
            key={item.name}
            className={`nav-item ${activeItem === item.name ? 'active' : ''}`}
            onClick={() => {
              setActiveItem(item.name); // Set the active item
              navigate(item.path); // Navigate to the selected route
            }}
          >
            <i className={`fa-solid ${item.icon}`}></i>
            <span>{item.name}</span>
          </li>
        ))}
        
        {/* <li className="nav-item settings">
          <i className="fa-solid fa-gear"></i>
          <span>Settings</span>
        </li> */}
      </ul>
      
      <div className="user-profile">
        <div className="avatar">AJ</div>
        <div className="user-info">
          <h3>Alex Johnson</h3>
          <p>Product Manager</p>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Sidebar;