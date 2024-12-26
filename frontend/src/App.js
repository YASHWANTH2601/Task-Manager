import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList/TaskList";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskDetails from "./components/TaskDetails";
import TaskUpdate from "./components/TaskUpdate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<TaskForm />} />
          <Route path="/update/:id" element={<TaskUpdate />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
