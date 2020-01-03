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
          resolve(err);
        } else {
          console.log("todoService.createTodo success");
          console.log(`result: ${result}`);
          resolve(undefined);
        }
      }
    );
  });

  let err = await promise;
  return err;
};
