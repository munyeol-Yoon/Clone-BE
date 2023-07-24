const express = require('express');
const authMiddleware = require("../middlewares/auth-middleware")
const DetailController = require('../controllers/detail.controller');
const detailController = new DetailController();

const router = express.Router();

router.get('/main', detailController.findAlldetail); // 메인페이지
router.post('/', authMiddleware, detailController.createDetail); // 집사진 상세 생성
router.get('/:detailsId', detailController.getDetailOne); // 집사진 상세 조회
router.put('/:detailsId', authMiddleware, detailController.updateDetail); // 집사진 상세 수정
router.delete('/:detailsId', authMiddleware, detailController.deleteDetail); // 집사진 상세 삭제

module.exports = router;
