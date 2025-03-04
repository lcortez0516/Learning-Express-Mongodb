import express from "express";
const route = express.Router();

// Routes
route
  .get("/", (req, res) => {
    res.send("All student");
  })
  .post("/create", (req, res) => {
    res.send("Create Student");
  })
  .put("/edit", (req, res) => {
    res.send("Edit Student");
  })
  .delete("/delete", (req, res) => {
    res.send("Delete Student");
  });

//route params practice
route.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  res.send(id);
});
route.put("/update/:id", (req, res) => {
  const { id } = req.params;
  res.send(id);
});

export default route;
