const ItemPageService = require('../services/itempage.service');
const { itemPageModels } = require('../validations/itempage.validation');

class ItemPageController {
  itemPageService = new ItemPageService();

  // 상품 전체 조회
  findAllItem = async (req, res) => {
    try {
      const allItems = await this.itemPageService.findAllItem();

      res.status(200).json({ allItems });
    } catch (err) {
      console.error(err);
      return res.status(400).json({ errorMessage: '상품 전체 목록 조회에 실패하였습니다.' });
    }
  };

  // 상품 상세 조회
  findOneItem = async (req, res) => {
    const { itemId } = req.params;

    try {
      const oneItem = await this.itemPageService.findOneItem(itemId);
      if (!oneItem) {
        return res.status(400).json({ errorMessage: '상품이 존재하지 않습니다.' });
      }

      res.status(200).json({ oneItem });
    } catch (err) {
      console.error(err);
      return res.status(400).json({ errorMessage: '상품 상세 조회에 실패하였습니다.' });
    }
  };

  // 상품 생성
  createItem = async (req, res) => {
    const { userId } = res.locals.user;
    const { brandName, itemName, rating, discount, price, colorData, sizeData, itemImgData } = req.body;

    const { error } = itemPageModels.validate({ brandName, itemName, rating, discount, price });
    console.log(error);

    try {
      if (error) return res.status(400).json({ errorMessage: error.details[0].message });

      if (userId != '1') {
        res.status(400).json({ errorMessage: '상품 생성은 관리자만 가능합니다.' });
      }

      const createItem = await this.itemPageService.createItem(
        userId,
        brandName,
        itemName,
        rating,
        discount,
        price,
        colorData,
        sizeData,
        itemImgData
      );

      return res.status(200).json({ message: '상품이 등록되었습니다.' });
    } catch (err) {
      console.error(err);
      return res.status(400).json({ errorMessage: '상품 등록에 실패하였습니다.' });
    }
  };

  // 상품 수정
  updateItem = async (req, res) => {
    const { itemId } = req.params;
    const { userId } = res.locals.user;
    const { brandName, itemName, rating, discount, price, colorData, sizeData, itemImgData } = req.body;

    const { error } = itemPageModels.validate({ brandName, itemName, rating, discount, price });

    try {
      if (error) return res.status(400).json({ errorMessage: error.details[0].message });

      if (userId != '1') {
        return res.status(400).json({ errorMessage: '상품 수정은 관리자만 가능합니다.' });
      }

      const updateTarget = await this.itemPageService.findOneItem(itemId);
      if (!updateTarget) {
        return res.status(400).json({ errorMessage: '수정할 상품이 존재하지 않습니다.' });
      }

      const updateItem = await this.itemPageService.updateItem(
        userId,
        itemId,
        brandName,
        itemName,
        rating,
        discount,
        price,
        colorData,
        sizeData,
        itemImgData
      );

      return res.status(200).json({ message: '상품 정보가 수정되었습니다.' });
    } catch (err) {
      console.error(err);
      res.status(400).json({ errorMessage: '상품 수정에 실패하였습니다.' });
    }
  };

  // 상품 삭제
  deleteItem = async (req, res) => {
    const { itemId } = req.params;
    const { userId } = res.locals.user;

    try {
      if (userId != '1') {
        res.status(400).json({ errorMessage: '상품 삭제는 관리자만 가능합니다.' });
      }

      const deleteTarget = await this.itemPageService.findOneItem(itemId);
      if (!deleteTarget) {
        return res.status(400).json({ errorMessage: '삭제할 상품이 존재하지 않습니다.' });
      }

      const deleteItem = await this.itemPageService.deleteItem(userId, itemId);

      return res.status(200).json({ message: '상품이 삭제되었습니다.' });
    } catch (err) {
      console.error(err);
      res.status(400).json({ errorMessage: '상품 삭제에 실패하였습니다.' });
    }
  };
}

module.exports = ItemPageController;
