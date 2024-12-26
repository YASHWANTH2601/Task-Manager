# Task Managment

A full-stack Task managment sharing application built with the MERN stack (MongoDB, Express, React, Node.js). Users can view, add, edit, and delete tasks.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Dependencies](#dependencies)
- [Additional Information](#additional-information)

## Features

- **Task Management**: Users can create, edit, delete, and view tasks.
- **Responsive Design**: Adaptable for both desktop and mobile.
- **RESTful API**: Fully functional API to manage task on the backend.

## Project Structure

```plaintext
Task Managment
├── backend
│   ├── config
│   │   └── db.js                # Database connection setup
│   ├── models
│   │   └── TaskModel.js         # Recipe schema
│   ├── routes
│   │   └── Task.js              # API routes for recipes
│   ├── index.js                 # Main server file
│   └── .env                     # Environment variables for MongoDB connection
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── App.js
│   │   ├── components            # All React components
└── README.md                     # Project documentation



Getting Started
Prerequisites
Node.js (v12+)
MongoDB (Local or MongoDB Atlas)
Backend Setup
Navigate to the backend directory:


cd backend
Install dependencies:
    

npm install
Set up environment variables:

Create a .env file in the backend directory and add your MongoDB connection string:


MONGO_URI=your-mongodb-connection-string
PORT=5000
Run the backend server:
npm start
The backend server will be running at http://localhost:5000.

Frontend Setup
Navigate to the frontend directory:

cd frontend
Install dependencies:

npm install
Set up environment variables:

Create a .env file in the frontend directory and add the backend API URL:

REACT_APP_API_URL=http://localhost:5000/api/recipes
Run the frontend server:
npm start
The frontend server will be running at http://localhost:3000.

Running the Application
Start the Backend Server:

Ensure MongoDB is running locally or accessible through MongoDB Atlas.
Run npm start in the backend directory.
Start the Frontend Server:

Run npm start in the frontend directory.
Access the Application:

Open a browser and go to http://localhost:3000.
Dependencies
Backend
express: Web framework for Node.js.
mongoose: MongoDB object modeling for Node.js.
cors: Middleware to enable CORS.
dotenv: Loads environment variables from a .env file.
Frontend
react: JavaScript library for building user interfaces.
react-router-dom: Library for routing in React.
fetch: Native JavaScript API for making HTTP requests (no additional dependency needed for HTTP requests in this app).
Additional Information
API Endpoints:

GET /api/tasks - Retrieve all tasks.
POST /api/tasks - Add a new tasks.
PUT /api/task/
- Update a task by ID.
DELETE /api/tasks/
- Delete a task by ID.
GET /api/recipes/
- Retrieve a single task by ID.
Testing: Ensure both the backend and frontend servers are running before accessing the app. You can view, add, edit, and delete task directly in the app.

Deploy Link is here:
https://task-manager-dun-one.vercel.app/
