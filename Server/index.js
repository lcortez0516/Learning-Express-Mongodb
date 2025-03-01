import express from "express";

const app = express();

app.get(
  "/",
  (req, res, next) => {
    console.log(`first function`);
    next();
  },
  (req, res) => {
    console.log("second function");
    res.send(`<h1>get</h1>`);
  }
);

app.listen(8000, () => console.log(`hello`));
