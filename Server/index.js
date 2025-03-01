import express from "express";

const app = express();

// app.get("/student", (req, res) => {
//   res.send("get Student");
// });
// app.post("/student", (req, res) => {
//   res.send("create Student");
// });
// app.put("/student", (req, res) => {
//   res.send("update Student");
// });
// app.delete("/student", (req, res) => {
//   res.send("delete Student");
// });

//Refactore to use app.route()
app
  .route("/student")
  .get((req, res) => res.send("Get student"))
  .post((req, res) => res.send("create student"))
  .put((req, res) => res.send(`update student`))
  .delete((req, res) => res.send(`delete student`));

app.listen(8000, () => console.log(`Server is running on port 8000`));
