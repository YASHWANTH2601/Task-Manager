import React, { useState, useEffect } from "react";
import { FormContainer, Input, Textarea, Button, Select } from "./Styled";
import { Link, useNavigate } from "react-router-dom";
const TaskForm = () => {
  const [task, setTask] = useState({
    name: "",
    description: "",
    dueDate: "",
    status: "Pending",
    priority: "Low",
  });
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://task-manager-kmf1.onrender.com/api/tasks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setTasks([...tasks, data]);
        setTask({
          name: "",
          description: "",
          dueDate: "",
          status: "Pending",
          priority: "Low",
        });
        navigate("/");
      } else {
        console.error("Failed to add task");
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center" }}>Task Form</h2>
        <Input
          type="text"
          name="name"
          value={task.name}
          onChange={handleChange}
          placeholder="Task Name"
        />{" "}
        <Textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Task Description"
        />
        <Input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
        />
        <Select name="status" value={task.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </Select>
        <Select name="priority" value={task.priority} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Select>
        <Button type="submit">Add Task</Button>
        <Button>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            Back
          </Link>
        </Button>
      </FormContainer>
    </>
  );
};

export default TaskForm;
