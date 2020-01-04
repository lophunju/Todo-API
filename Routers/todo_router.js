const express = require("express");
const router = express.Router();

const todoController = require("../Controller/todo_controller");

// todo 생성
router.post("/", todoController.createTodo);

// todo 조회
router.get("/", todoController.getAllList); //전체조회
router.get("/title", todoController.getListByTitle); //제목조회
router.get("/status", todoController.getListByStatus); //상태조회
router.get("/context", todoController.getListByContext); //context조회
router.get("/duedate", todoController.getListByDuedate); //마감일조회
router.get("/enddate", todoController.getListByEnddate); //완료일조회
router.get("/:todoId", todoController.getOneDetail); //상세조회

// todo 변경
router.put("/", todoController.modifyTodo);

// todo 삭제
router.delete("/", todoController.deleteTodo);

module.exports = router;
