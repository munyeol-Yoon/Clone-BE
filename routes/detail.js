const express = require("express");

const DetailController = require("../controllers/detail.controller");
const detailController = new DetailController();

const router = express.Router();

router.get("/"); // 메인페이지
router.post("/"); // 집사진 상세 생성
router.get("/:detailId"); // 집사진 상세 조회
router.put("/:detailId"); // 집사진 상세 수정
router.delete("/:detailId"); // 집사진 상세 삭제

module.exports = router;
