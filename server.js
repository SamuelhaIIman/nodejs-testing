import express from "express";
import { addTwo } from './db.js';

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});

console.log(addTwo(4));