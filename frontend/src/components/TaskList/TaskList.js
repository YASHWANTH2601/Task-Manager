import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import {
  TaskButton,
  DeteteButton,
  TaskListContainer,
  TaskListUl,
  TaskItem,
  TaskItemTitle,
  TaskItemText,
  TaskAddButton,
  EmptyContainer,
  HeaderContainer,
  TaskItemTexts,
} from "./Styled";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(
        `https://task-manager-kmf1.onrender.com/api/tasks`
      );
      if (response.ok) {
        const data = await response.json();
        setTasks(data);
      } else {
        console.error("Failed to fetch tasks");
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await fetch(
        `https://task-manager-kmf1.onrender.com/api/tasks/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setTasks(tasks.filter((t) => t._id !== id));
      } else {
        console.error("Failed to delete task");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <TaskListContainer>
      <HeaderContainer>
        <h2>Task Manager</h2>
        <Link style={{ textDecoration: "none" }} to={`/add`}>
          <TaskAddButton>Add Task</TaskAddButton>
        </Link>
      </HeaderContainer>
      <TaskListUl>
        {tasks.length === 0 ? (
          <EmptyContainer>
            <h1
              style={{
                fontSize: "2rem",
              }}
            >
              No tasks found
            </h1>
            <Link style={{ textDecoration: "none" }} to={`/add`}>
              <div>
                <TaskAddButton>Add Task</TaskAddButton>
              </div>
            </Link>
          </EmptyContainer>
        ) : (
          <>
            {tasks.map((task) => (
              <TaskItem key={task._id}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/tasks/${task._id}`}
                >
                  <TaskItemTitle>{task.name}</TaskItemTitle>
                  <TaskItemTexts>{task.description}</TaskItemTexts>
                  <TaskItemText>
                    Due Date: {new Date(task.dueDate).toLocaleDateString()}
                  </TaskItemText>
                  <TaskItemText>Status: {task.status}</TaskItemText>
                  <TaskItemText>Priority: {task.priority}</TaskItemText>
                </Link>

                <Link
                  style={{ textDecoration: "none" }}
                  to={`/update/${task._id}`}
                >
                  <TaskButton>
                    <CiEdit fill="black" size={30} />
                  </TaskButton>
                </Link>
                <DeteteButton onClick={() => deleteTask(task._id)}>
                  <MdDelete fill="black" size={30} />
                </DeteteButton>
              </TaskItem>
            ))}
          </>
        )}
      </TaskListUl>
    </TaskListContainer>
  );
};

export default TaskList;
