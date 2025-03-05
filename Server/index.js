import express from "express";
import student from "./routes/student.js";
import teacher from "./routes/teacher.js";
import { dbConnect } from "./database/dbConnect.js";
import { createDoc } from "./models/Movies.js";


// server
const server = express();
const port = process.send.PORT || 8000
const DATABASE_URL = process.send.DATABASE_URL || 'mongodb://127.0.0.1:27017/movies'
// connect to the database
dbConnect(DATABASE_URL)

//use the route
server.use("/student", student);
server.use("/teacher", teacher);

//createDoc
createDoc()

// app.param - checks if param is present
// server.param("id", (req, res, next, id) => {
//   console.log(`id: ${id}`);
//   next();
// });

// server.get("/user/:id", (req, res) => {
//   res.send(`response ok`);
// });

server.listen(port, () => console.log("Server is running on port 8000"));
