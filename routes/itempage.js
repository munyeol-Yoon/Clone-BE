const express = require("express");

//! 필수사항: 관리자만 CUD 할 수 있도록 미들웨어 통과시키기 ( 문열님 작업 이후 )
// const authMiddleware = require();
// const ItemPageController = require("../controllers/itempage.controller");
// const itemPageController = new ItemPageController();

const router = express.Router();

// router.post("/", authMiddleware, itemPageController.createItem); // 상품등록
// router.put("/:itemId", authMiddleware, itemPageController.updateItem); // 상품수정
// router.delete("/:itemId", authMiddleware, itemPageController.deleteItem); // 상품삭제

module.exports = router;
