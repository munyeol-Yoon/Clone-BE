const express = require("express");

const ItemPageController = require("../controllers/itempage.controller");
const itemPageController = new ItemPageController();

const router = express.Router();

router.post("/:itemId"); // 상품등록
router.put("/:itemId"); // 상품수정
router.delete("/:itemId"); // 상품삭제

module.exports = router;
