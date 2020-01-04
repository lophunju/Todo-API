const todoService = require("../Service/todo_service");

exports.createTodo = async (req, res) => {
  let result = await todoService.createTodo(req);
  if (result) res.json(result);
  else res.status(500).send("Internal Server Error");
};

exports.getAllList = async (req, res) => {
  let result = await todoService.getAllList();
  if (result) res.json(result);
  else res.status(500).send("Internal Server Error");
};

exports.getOneDetail = (req, res) => {
  res.send("i'm in getOne");
};

exports.getListByTitle = (req, res) => {
  res.send("i'm in getListByTitle");
};

exports.getListByStatus = (req, res) => {
  res.send("i'm in getListByStatus");
};

exports.getListByContext = (req, res) => {
  res.send("i'm in getListByContext");
};

exports.getListByDuedate = (req, res) => {
  res.send("i'm in getListByDuedate");
};

exports.getListByEnddate = (req, res) => {
  res.send("i'm in getListByEnddate");
};

exports.modifyTodo = (req, res) => {
  res.send("i'm in modifyTodo");
};

exports.deleteTodo = (req, res) => {
  res.send("i'm in deleteTodo");
};
