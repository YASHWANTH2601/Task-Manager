const express = require("express");
const cors = require("cors");
require("dotenv").config();
const Task = require("./routes/Task");
const connectDB = require("./config/db");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use("/api", Task);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

startServer();
