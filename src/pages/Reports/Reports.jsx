// import React, { useEffect, useRef } from "react";
// import Gantt from "frappe-gantt";
// import "./Reports.css"; // Custom styles if needed

const Reports = ({ tasks }) => {
//   const ganttRef = useRef(null);

//   useEffect(() => {
//     if (!tasks || tasks.length === 0) return;

//     // Convert tasks to Frappe Gantt format
//     const ganttTasks = tasks
//       .filter((task) => task.startDate && task.dueDate) // Ensure valid dates
//       .map((task) => ({
//         id: task.id || "",
//         name: task.title || "Unnamed Task", // Default name
//         start: task.startDate, // Ensure this is in YYYY-MM-DD format
//         end: task.dueDate, // Ensure this is in YYYY-MM-DD format
//         progress: task.subtasks?.total
//           ? Math.round((task.subtasks.completed / task.subtasks.total) * 100)
//           : 0, // Calculate progress percentage
//         dependencies: task.dependencies || "", // Optional
//       }));

//     if (ganttTasks.length === 0) return; // Avoid initializing with empty data

//     // Clear previous Gantt chart (if exists)
//     if (ganttRef.current) ganttRef.current.innerHTML = "";

//     // Initialize Gantt chart
//     const gantt = new Gantt(ganttRef.current, ganttTasks, {
//       header_height: 50,
//       column_width: 50,
//       step: 24,
//       view_modes: ["Day", "Week", "Month"],
//       bar_height: 30,
//       bar_corner_radius: 5,
//       arrow_curve: 5,
//       padding: 20,
//       date_format: "YYYY-MM-DD",
//       language: "en",
//     });

//   }, [tasks]); // Re-run when tasks update

  return (
    <div>
      <h2>Gantt Chart</h2>
      {/* <div ref={ganttRef}></div> */}
    </div>
  );
};

export default Reports;
