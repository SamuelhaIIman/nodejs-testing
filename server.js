const express = require("express"); // Use require to import express
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});