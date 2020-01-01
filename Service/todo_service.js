const Todo = require("../Mapper/todoSchema");
const UtilService = require("./util_service");

exports.createTodo = req => {
  let date = UtilService.makeNotRequiredDate(req);
  Todo.create(
    {
      title: req.body.title,
      status: req.body.status,
      context: req.body.context,
      dueDate: date.dueDate,
      doneAt: date.doneAt
    },
    (err, result) => {
      if (err) {
        console.log("todoService.creatTodo error");
        return err;
      }
      console.log("todoService.createTodo success");
      console.log(`result: ${result}`);
    }
  );
};
