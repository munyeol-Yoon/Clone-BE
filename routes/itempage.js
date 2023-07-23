const express = require('express');

const ItemPageController = require('../controllers/itempage.controller');
const itemPageController = new ItemPageController();

const router = express.Router();

router.get('/', itemPageController.findAllItem); // 상품조회
router.post('/', itemPageController.createItem); // 상품등록
router.put('/:itemId', itemPageController.updateItem); // 상품수정
router.delete('/:itemId', itemPageController.deleteItem); // 상품삭제

module.exports = router;
