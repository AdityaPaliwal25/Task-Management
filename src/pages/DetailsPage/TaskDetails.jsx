// TaskDetailsPage.jsx
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import TaskMediaUpload from "../../components/TaskMediaUpload";
import TaskMediaList from "../../components/TaskMediaList";
import axios from "axios";
import "./TaskDetails.css";
const TaskDetails = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/tasks/${taskId}`);
        setTask(res.data);
      } catch (err) {
        console.error('Error fetching task:', err);
      }
    };

    fetchTask();
  }, [taskId]);

  if (!task) return <div>Loading task...</div>;
  return (
    <div className="taskPage">
      <h4 className="task-title">Task : {task.title}</h4>
      <div className="task-info">
      <p><span>🧑 Assignee:</span> {task.assignee}</p>
          <p><span>⚡ Priority:</span> {task.priority}</p>
          <p><span>📌 Status:</span> {task.status}</p>
          <p><span>📅 Start Date:</span> {task.startDate}</p>
          <p><span>⏳ Due Date:</span> {task.dueDate}</p>
          <p><span>🔁 Recurring:</span> {task.recurring ? "Yes" : "No"}</p>
      </div>

      <div className="media-section">
        <h4 className="task-title">Upload Audio/Video Note</h4>
        <TaskMediaUpload taskId={taskId} />
        <TaskMediaList taskId={taskId} />
      </div>
    </div>
  );
};

export default TaskDetails;
