const express = require("express");
const router = express.Router();

const todoController = require("../Controller/todo_controller");

// todo ����
router.post("/", todoController.createTodo);

// todo ��ȸ
router.get("/", todoController.getListAll); //��ü��ȸ   [page]
router.get("/count", todoController.getCount);
router.get("/title", todoController.getListByTitle); //������ȸ  [arg, page]
router.get("/status", todoController.getListByStatus); //������ȸ   [arg, page]
router.get("/context", todoController.getListByContext); //context��ȸ   [arg, page]
router.get("/duedate", todoController.getListByDuedate); //��������ȸ
router.get("/enddate", todoController.getListByEnddate); //�Ϸ�����ȸ
router.get("/:todoId", todoController.getOneDetail); //����ȸ   [_id]

// todo ����
router.put("/", todoController.modifyTodo);

// todo ����
router.delete("/", todoController.deleteTodo);

module.exports = router;
