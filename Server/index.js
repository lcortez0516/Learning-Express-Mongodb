import express from "express";
import student from "./routes/student.js";

// server
const server = express();
//use the route
server.use("/student", student);

server.listen(8000, () => console.log("Server is running on port 8000"));
