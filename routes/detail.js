const express = require('express');

const DetailController = require('../controllers/detail.controller');
const detailController = new DetailController();

const router = express.Router();
const upload = require('../middlewares/multer-middleware');
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/image', upload.single('image'), detailController.createImage); // 이미지 업로드
router.post('/', authMiddleware, detailController.createDetail); // 집사진 상세 생성
router.get('/:detailsId', detailController.getDetailOne); // 집사진 상세 조회
router.put('/:detailsId', detailController.updateDetail); // 집사진 상세 수정
router.delete('/:detailsId', detailController.deleteDetail); // 집사진 상세 삭제


module.exports = router;
