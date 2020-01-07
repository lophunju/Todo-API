const TodoService = require("../Service/todo_service");

exports.createTodo = async (req, res) => {
  let result = await TodoService.createTodo(req);
  if (result) res.json(result);
  else res.status(500).send("Internal Server Error");
};

exports.getListAll = async (req, res) => {
  let list = await TodoService.listOnePage("title", "", req.query.page);
  if (list) res.json(list);
  else res.status(500).send("Internal Server Error");
};

exports.getCount = async (req, res) => {
  let count = await TodoService.getCount(req);
  if (count) res.send(count.toString());
  else res.status(500).send("Internal Server Error");
};

exports.getOneDetail = async (req, res) => {
  let _id = req.params.todoId;
  let result = await TodoService.getOneDetail(_id);
  if (result) res.json(result);
  else res.status(500).send("Internal Server Error");
};

exports.getListByTitle = async (req, res) => {
  let list = await TodoService.listOnePage(
    "title",
    req.query.arg,
    req.query.page
  );
  if (list) res.json(list);
  else res.status(500).send("Internal Server Error");
};

exports.getListByStatus = async (req, res) => {
  let list = await TodoService.listOnePage(
    "status",
    req.query.arg,
    req.query.page
  );
  if (list) res.json(list);
  else res.status(500).send("Internal Server Error");
};

exports.getListByContext = async (req, res) => {
  let list = await TodoService.listOnePage(
    "context",
    req.query.arg,
    req.query.page
  );
  if (list) res.json(list);
  else res.status(500).send("Internal Server Error");
};

exports.getListByDuedate = async (req, res) => {
  res.send("I'm in getListByDuedate");
};

exports.getListByEnddate = async (req, res) => {
  res.send("I'm in getListByEnddate");
};

exports.modifyTodo = (req, res) => {
  res.send("i'm in modifyTodo");
};

exports.deleteTodo = (req, res) => {
  res.send("i'm in deleteTodo");
};
