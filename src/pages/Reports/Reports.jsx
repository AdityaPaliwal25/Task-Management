import React, { useState } from "react";
import TaskGanttChart from "./TaskGanttChart";
import "./Reports.css";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const getStatusColor = (status) => {
  switch (status) {
    case "To Do":
      return "#f4a361";
    case "In Progress":
      return "#EF476F";
    case "Completed":
      return "#2A9D8F";
    default:
      return "#10b981";
  }
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case "Low":
      return "#A0AEC0";
    case "High":
      return "#EF476F";
    case "Medium":
      return "#E9C46A";
    default:
      return "#2A9D8F";
  }
};
const Reports = ({ tasks }) => {
  const [viewType, setViewType] = useState("gantt");
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const filteredTasks = hoveredCategory
    ? tasks.filter((task) => task.status === hoveredCategory)
    : [];
  const priorityFilter = hoveredCategory
    ? tasks.filter((task) => task.priority === hoveredCategory)
    : [];
  const statusCounts = ["To Do", "In Progress", "Completed"].map((status) => ({
    name: status,
    value: tasks.filter((task) => task.status === status).length,
    color: getStatusColor(status),
  }));

  const priorityCounts = ["Low", "Medium", "High"].map((priority) => ({
    name: priority,
    value: tasks.filter((task) => task.priority === priority).length,
    color: getPriorityColor(priority),
  }));
  return (
    <div className="reports-page">
      <h1>
        Task Reports{" "}
        <p className="summary-section">
          <span>Total Tasks: {tasks.length}</span>
        </p>
      </h1>
      <div className="view-toggle">
        <button
          className={`view-toggle-btn ${
            viewType === "gantt" ? "active" : "inactive"
          }`}
          onClick={() => setViewType("gantt")}
        >
          Gantt Chart
        </button>
        <button
          className={`view-toggle-btn ${
            viewType === "summary" ? "active" : "inactive"
          }`}
          onClick={() => setViewType("summary")}
        >
          Task Summary
        </button>
      </div>

      {viewType === "gantt" && (
        <div className="report-card">
          {/* <h2>Task Gantt Chart</h2> */}
          <TaskGanttChart tasks={tasks} />
        </div>
      )}

      {viewType === "summary" && (
        <div className="report-card">
          {/* <h2 style={{textAlign:"left"}}>Task Summary</h2> */}

          {/* Tasks by Status */}
          <div className="summary-section">
            <div className="piechartdiv">
              <ResponsiveContainer width={300} height={300}>
                <h3 style={{ textAlign: "left", marginBottom: "2rem" }}>
                  Tasks by Status
                </h3>
                <PieChart>
                  <Pie
                    data={statusCounts}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    labelLine={false}
                    onMouseEnter={(data) => setHoveredCategory(data.name)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    {statusCounts.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend layout="vertical" align="left" verticalAlign="top" />
                </PieChart>
              </ResponsiveContainer>

              <ResponsiveContainer width={300} height={300}>
                <h3 style={{ textAlign: "left", marginBottom: "2rem" }}>
                  Tasks by Priority
                </h3>
                <PieChart>
                  <Pie
                    data={priorityCounts}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    labelLine={false}
                    onMouseEnter={(data) => setHoveredCategory(data.name)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    {priorityCounts.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend layout="vertical" align="right" verticalAlign="top" />
                </PieChart>
              </ResponsiveContainer>
            </div>
            {/* Task List on Hover */}
            {hoveredCategory && (
              <div style={{ textAlign: "left", paddingLeft: "13rem" }}>
                {/* <h3>{hoveredCategory} Tasks </h3> */}
                <ul>
                  {filteredTasks.length > 0
                    ? filteredTasks.map((task, index) => (
                        <li key={index}> {task.title}</li>
                      ))
                    : null}
                </ul>
              </div>
            )}
            {hoveredCategory && (
              <div style={{ textAlign: "right", paddingRight: "13rem" }}>
                {/* <h3>{hoveredCategory} Tasks </h3> */}
                <ul style={{ listStyleType: "none" }}>
                  {priorityFilter.length > 0
                    ? priorityFilter.map((task, index) => (
                        <li key={index}> {task.title}</li>
                      ))
                    : null}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;
