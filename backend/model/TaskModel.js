const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: String,
  description: String,
  dueDate: Date,
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending",
  },
  priority: { type: String, enum: ["Low", "Medium", "High"] },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
