require("dotenv").config();

const express = require("express");
const app = express();
app.set("port", process.env.PORT || 3000);

const todoRouter = require("./Routers/todo_router");

// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });

app.use("/api/todo", todoRouter);

app.listen(app.get("port"), () => {
  console.log(`Server is listening ${app.get("port")} port`);
});
