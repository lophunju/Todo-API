const express = require("express");
const router = express.Router();

const testController = require("../Controller/test_controller");

router.post("/", testController.createKitten);
router.get("/", testController.getAllKitten);

module.exports = router;
