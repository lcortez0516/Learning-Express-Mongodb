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
  .get("/", (req, res) => {
    getTeachers();
    res.send("All teacher");
  })
  .post("/create", (req, res) => {
    createTeachers();
    res.send("Create teacher");
  })
  .put("/update", (req, res) => {
    updateTeachers();
    res.send("Edit teacher");
  })
  .delete("/delete", (req, res) => {
    removeTeachers();
    res.send("Delete teacher");
  });

export default route;
