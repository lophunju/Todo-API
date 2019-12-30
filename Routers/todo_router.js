const express = require("express");
const router = express.Router();

const todoController = require("../Controller/todo_controller");

// todo ����
router.post("/", todoController.createTodo);

// todo ��ȸ
router.get(["/", "/:param", "/:param/:paramId"], (req, res) => {
  let param = req.params.param;
  let paramId = req.params.paramId;

  if (!param) {
    // ��ü��ȸ
    todoController.getAllList(req, res);
  } else if (param && !paramId) {
    // ����ȸ
    todoController.getOne(req, res);
  } else {
    switch (paramId) {
      case "1": {
        // ������ȸ
        todoController.getListByTitle(req, res);
        break;
      }
      case "2": {
        // ������ȸ
        todoController.getListByStatus(req, res);
        break;
      }
      case "3": {
        // context��ȸ
        todoController.getListByContext(req, res);
        break;
      }
      case "4": {
        // ��������ȸ
        todoController.getListByDuedate(req, res);
        break;
      }
      case "5": {
        // �Ϸ�����ȸ
        todoController.getListByEnddate(req, res);
        break;
      }
    }
    console.log("Invalid paramId has passed to server");
    res
      .status(500)
      .send(
        "Invalid paramId has passed to server. It should be one of 1,2,3,4,5"
      );
  }
});

// todo ����
router.put("/", todoController.modifyTodo);

// todo ����
router.delete("/", todoController.deleteTodo);

module.exports = router;
