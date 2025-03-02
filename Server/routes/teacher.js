import express from "express";
const route = express.Router();
// Controller
import {
  getTeachers,
  createTeachers,
  updateTeachers,
  removeTeachers,
} from "../controllers/teacherController.js";

// Routes
route
  .get("/", getTeachers)
  .post("/create", createTeachers)
  .put("/update", updateTeachers)
  .delete("/delete", removeTeachers);

export default route;
