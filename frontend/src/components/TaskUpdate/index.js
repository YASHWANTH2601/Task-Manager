import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FormContainer, Input, Textarea, Button, Select } from "./Styled";

const TaskUpdate = () => {
  const { id } = useParams();
  const [task, setTask] = useState({
    name: "",
    description: "",
    dueDate: "",
    status: "Pending",
    priority: "Low",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchTask();
    }
  }, [id]);

  const fetchTask = async () => {
    try {
      const response = await fetch(
        `https://task-manager-kmf1.onrender.com/api/tasks/${id}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.dueDate) {
          data.dueDate = new Date(data.dueDate).toISOString().split("T")[0];
        }
        setTask(data); // Correctly set the fetched task
        // Redirect to the home page
      } else {
        console.error("Failed to fetch task");
      }
    } catch (error) {
      console.error("Error fetching task:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://task-manager-kmf1.onrender.com/api/tasks/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task),
        }
      );

      if (response.ok) {
        const data = await response.json();
        navigate("/");
        setTask({
          name: "",
          description: "",
          dueDate: "",
          status: "Pending",
          priority: "Low",
        });
      } else {
        console.log("Failed to save task");
      }
    } catch (error) {
      console.error("Error saving task:", error);
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
        <Button type="submit">Update Task</Button>{" "}
        <Button>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            Back
          </Link>
        </Button>
      </FormContainer>
    </>
    // <FormContainer onSubmit={handleSubmit}>
    //   <Input
    //     type="text"
    //     name="name"
    //     value={task.name}
    //     onChange={handleChange}
    //     placeholder="Task Name"
    //     required
    //   />
    //   <Textarea
    //     name="description"
    //     value={task.description}
    //     onChange={handleChange}
    //     placeholder="Task Description"
    //     required
    //   />
    //   <Input
    //     type="date"
    //     name="dueDate"
    //     value={task.dueDate}
    //     onChange={handleChange}
    //     required
    //   />
    //   <Select name="status" value={task.status} onChange={handleChange}>
    //     <option value="Pending">Pending</option>
    //     <option value="In Progress">In Progress</option>
    //     <option value="Completed">Completed</option>
    //   </Select>
    //   <Select name="priority" value={task.priority} onChange={handleChange}>
    //     <option value="Low">Low</option>
    //     <option value="Medium">Medium</option>
    //     <option value="High">High</option>
    //   </Select>
    //   <Button type="submit">{id ? "Update Task" : "Add Task"}</Button>
    // </FormContainer>
  );
};

// const FormContainer = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   padding: 1rem;
//   max-width: 600px;
//   margin: 0 auto;

//   @media (max-width: 768px) {
//     padding: 0.5rem;
//   }
// `;

// const Input = styled.input`
//   padding: 0.5rem;
//   font-size: 1rem;

//   @media (max-width: 768px) {
//     font-size: 0.875rem;
//   }
// `;

// const Textarea = styled.textarea`
//   padding: 0.5rem;
//   font-size: 1rem;

//   @media (max-width: 768px) {
//     font-size: 0.875rem;
//   }
// `;

// const Select = styled.select`
//   padding: 0.5rem;
//   font-size: 1rem;

//   @media (max-width: 768px) {
//     font-size: 0.875rem;
//   }
// `;

// const Button = styled.button`
//   padding: 0.75rem;
//   font-size: 1rem;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     font-size: 0.875rem;
//     padding: 0.5rem;
//   }
// `;

export default TaskUpdate;
