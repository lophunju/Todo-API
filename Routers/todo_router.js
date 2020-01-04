const express = require("express");
const router = express.Router();

const todoController = require("../Controller/todo_controller");

// todo ����
router.post("/", todoController.createTodo);

// todo ��ȸ
router.get("/", todoController.getAllList); //��ü��ȸ
router.get("/title", todoController.getListByTitle); //������ȸ
router.get("/status", todoController.getListByStatus); //������ȸ
router.get("/context", todoController.getListByContext); //context��ȸ
router.get("/duedate", todoController.getListByDuedate); //��������ȸ
router.get("/enddate", todoController.getListByEnddate); //�Ϸ�����ȸ
router.get("/:todoId", todoController.getOneDetail); //����ȸ

// todo ����
router.put("/", todoController.modifyTodo);

// todo ����
router.delete("/", todoController.deleteTodo);

module.exports = router;
