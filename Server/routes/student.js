import express, { json } from "express";
import {
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

const route = express.Router();

route.get("/", (req, res) => {
  getStudent();
  res.send(`All students`);
});
route.post("/create", (req, res) => {
  createStudent();
  res.send(`create students`);
});
route.put("/update", (req, res) => {
  updateStudent();
  res.send(`update students`);
});
route.delete("/delete", (req, res) => {
  deleteStudent();
  res.send(`delete students`);
});

export default route;
