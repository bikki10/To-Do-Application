const express = require("express");
const indexRouter = require("./routes");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/todo").then(() => {
  console.log("Connected to MongoDB");
});

app.use(express.json());
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
