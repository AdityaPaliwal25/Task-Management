import React from "react";
import "./TaskCard.css";

const TaskCard = ({ task }) => {
  const { id, title, description, priority, status, subtasks, dueDate, assignee, recurring } = task;

  const progressWidth = subtasks ? (subtasks.completed / subtasks.total) * 100 : 0;

  return (
    <div className="task-card">
      <div className="task-card-header">
        <div className="task-title">
          <input type="checkbox" id={`task-${id}`} checked={status === "completed"} readOnly />
          <h3>{title}</h3>
        </div>
        <div className="task-actions">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>

      <div className="task-description">{description}</div>

      {subtasks && (
        <>
          <div className="subtasks">
            <div className="subtasks-progress" style={{ width: `${progressWidth}%` }}></div>
          </div>
          <div className="subtasks-text">Subtasks ({subtasks.completed}/{subtasks.total})</div>
        </>
      )}

      <div className="task-tags">
        <span className={`tag ${priority}`}>{priority}</span>
        <span className={`tag ${status}`}>{status}</span>
        {recurring && <span className="tag recurring">Recurring</span>}
      </div>

      <div className="task-footer">
        <div className="task-date">
          <i className="fa-regular fa-calendar"></i> {dueDate}
        </div>
        <div className="task-assignee">
          <i className="fa-regular fa-user"></i> {assignee}
        </div>
      </div>

      <button className="details-btn">Details</button>
    </div>
  );
};

export default TaskCard;
