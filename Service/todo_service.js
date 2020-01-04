const Todo = require("../Mapper/todoSchema");
const UtilService = require("./util_service");

exports.createTodo = async req => {
  let date = await UtilService.makeNotRequiredDate(req);

  let promise = new Promise(resolve => {
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
          console.log(err);
          resolve(undefined);
        } else {
          console.log("todoService.createTodo success");
          console.log(`result: ${result}`);
          resolve(result);
        }
      }
    );
  });

  return promise;
};

exports.getAllList = req =>
  new Promise(resolve => {
    Todo.find((err, result) => {
      if (err) {
        console.log("todoService.getAllList error");
        console.log(err);
        resolve(undefined);
      } else {
        console.log("todoService.getAllList success");
        console.log(result);
        resolve(result);
      }
    });
  });
