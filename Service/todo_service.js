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

exports.listOnePage = (field, arg, page) =>
  new Promise(resolve => {
    const per_page = 1;

    Todo.find(
      { [field]: new RegExp(arg, "i") },
      {},
      { skip: (page - 1) * per_page, limit: per_page },
      (err, result) => {
        if (err) {
          console.log("todoService.listOnePage error");
          console.log(err);
          resolve(undefined);
        } else {
          console.log("todoService.listOnePage success");
          console.log(result);
          resolve(result);
        }
      }
    );
  });

exports.getCount = req =>
  new Promise(resolve => {
    Todo.countDocuments({ type: req.criteria }, (err, count) => {
      if (err) {
        console.log("todoService.getCount error");
        console.log(err);
        resolve(undefined);
      } else {
        console.log("todoService.getCount success");
        console.log(count);
        resolve(count);
      }
    });
  });

exports.getOneDetail = _id =>
  new Promise(resolve => {
    Todo.findById(_id, (err, result) => {
      if (err) {
        console.log("todoService.getOneDetail error");
        console.log(err);
        resolve(undefined);
      } else {
        console.log("todoService.getOneDetail success");
        console.log(result);
        resolve(result);
      }
    });
  });
