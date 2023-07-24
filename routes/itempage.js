const express = require('express');

const authMiddleware = require('../middlewares/auth-middleware');
const ItemPageController = require('../controllers/itempage.controller');
const itemPageController = new ItemPageController();

const router = express.Router();

router.get('/', itemPageController.findAllItem); // 상품 전체조회
router.get('/:itemId', itemPageController.findOneItem); // 상품 상세조회
router.post('/', authMiddleware, itemPageController.createItem); // 상품등록
router.put('/:itemId', authMiddleware, itemPageController.updateItem); // 상품수정
router.delete('/:itemId', authMiddleware, itemPageController.deleteItem); // 상품삭제

module.exports = router;
