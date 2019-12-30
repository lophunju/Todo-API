const express = require("express");
const router = express.Router();

const todoController = require("../Controller/todo_controller");

// todo 생성
router.post("/", todoController.createTodo);

// todo 조회
router.get(["/", "/:param", "/:param/:paramId"], (req, res) => {
  let param = req.params.param;
  let paramId = req.params.paramId;

  if (!param) {
    // 전체조회
    todoController.getAllList(req, res);
  } else if (param && !paramId) {
    // 상세조회
    todoController.getOne(req, res);
  } else {
    switch (paramId) {
      case "1": {
        // 제목조회
        todoController.getListByTitle(req, res);
        break;
      }
      case "2": {
        // 상태조회
        todoController.getListByStatus(req, res);
        break;
      }
      case "3": {
        // context조회
        todoController.getListByContext(req, res);
        break;
      }
      case "4": {
        // 마감일조회
        todoController.getListByDuedate(req, res);
        break;
      }
      case "5": {
        // 완료일조회
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

// todo 변경
router.put("/", todoController.modifyTodo);

// todo 삭제
router.delete("/", todoController.deleteTodo);

module.exports = router;
