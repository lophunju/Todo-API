require("dotenv").config();

const express = require("express");
const app = express();
app.set("port", process.env.PORT || 3000);

const DB = require("./Config/mongoose");
DB.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const testRouter = require("./Routers/test_router");
const todoRouter = require("./Routers/todo_router");

// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });

app.use("/test", testRouter);
app.use("/api/todo", todoRouter);

app.listen(app.get("port"), () => {
  console.log(`Server is listening ${app.get("port")} port`);
});
