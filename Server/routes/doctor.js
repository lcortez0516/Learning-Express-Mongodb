import express from "express";
import { getDoctor } from "../controllers/doctorController.js";

const route = express.Router();

route.get("/", (req, res) => {
  getDoctor();
  res.send("All doctors");
});

export default route;
