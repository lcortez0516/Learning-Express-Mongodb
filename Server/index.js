import express from "express";
import student from "./routes/student.js";
import teacher from "./routes/teacher.js";

// server
const server = express();
//use the route
server.use("/student", student);
server.use("/teacher", teacher);

// app.param - checks if param is present
// server.param("id", (req, res, next, id) => {
//   console.log(`id: ${id}`);
//   next();
// });

// server.get("/user/:id", (req, res) => {
//   res.send(`response ok`);
// });

server.listen(8000, () => console.log("Server is running on port 8000"));
