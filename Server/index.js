import express from "express";
import student from "./routes/student.js";
import doctor from "./routes/doctor.js";

const app = express();

app.use("/student", student);
app.use("/doctor", doctor);

app.listen(8000, () => console.log(`Server is running on port 8000`));
