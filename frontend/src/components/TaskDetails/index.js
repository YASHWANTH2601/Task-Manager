import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, TaskDetailsContainer, TaskDetail } from "./Styled";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState({});

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`);
      if (response.ok) {
        const data = await response.json();
        setTask(data);
      } else {
        console.error("Failed to fetch tasks");
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <TaskDetailsContainer>
        <TaskDetail>Name: {task.name}</TaskDetail>
        <TaskDetail>Description: {task.description}</TaskDetail>
        <TaskDetail>
          Due Date: {new Date(task.dueDate).toLocaleDateString()}
        </TaskDetail>
        <TaskDetail>Status: {task.status}</TaskDetail>
        <TaskDetail>Priority: {task.priority}</TaskDetail>
        <Button>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            Back
          </Link>
        </Button>
      </TaskDetailsContainer>
    </div>
  );
};

export default TaskDetails;
