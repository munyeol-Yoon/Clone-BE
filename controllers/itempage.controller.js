const ItemPageService = require('../services/itempage.service');
// const { itempageEH } = require('../eh/itempage.eh');

class ItemPageController {
  itemPageService = new ItemPageService();

  findAllItem = async () => {
    const allItems = await this.itemPageService.findAllItem();
    // console.log('cont : ' + JSON.stringify(allItems));
    return allItems;
  };

  createItem = async (req, res) => {
    let { brandName, itemName, rating, discount, price, imgUrl } = req.body;
    // const { userId } = res.locals.user;

    try {
      // if (userId != '1') {
      //   res.status(400).json({ errorMessage: '상품 생성은 관리자만 가능합니다.' });
      // }

      // imgUrl = JSON.stringify(imgUrl);

      const createItem = await this.itemPageService.createItem(1, brandName, itemName, rating, discount, price, imgUrl);

      return res.status(200).json({ message: '상품이 등록되었습니다.' });
    } catch (err) {
      console.error(err);
      return res.status(400).json({ errorMessage: '상품 등록에 실패하였습니다.' });
    }
  };

  updateItem = async (req, res) => {
    const { brandName, itemName, rating, discount, price, imgUrl } = req.body;
    const { itemId } = req.params;
    // const { userId } = res.locals.user;

    try {
      // if (userId != '1') {
      //   res.status(400).json({ errorMessage: '상품 수정은 관리자만 가능합니다.' });
      // }

      imgUrl = JSON.stringify(imgUrl);

      const updateItem = await this.itemPageService.updateItem(
        itemId,
        brandName,
        itemName,
        rating,
        discount,
        price,
        imgUrl
      );

      return res.status(200).json({ message: '상품 정보가 수정되었습니다.' });
    } catch (err) {
      console.error(err);
      res.status(400).json({ errorMessage: '상품 수정에 실패하였습니다.' });
    }
  };

  deleteItem = async (req, res) => {
    const { itemId } = req.params;
    // const { userId } = res.locals.user;

    try {
      // if (userId != '1') {
      //   res.status(400).json({ errorMessage: '상품 삭제는 관리자만 가능합니다.' });
      // }

      const deleteItem = await this.itemPageService.deleteItem(userId, itemId);

      return res.status(200).json({ message: '상품이 삭제되었습니다.' });
    } catch (err) {
      console.error(err);
      res.status(400).json({ errorMessage: '상품 삭제에 실패하였습니다.' });
    }
  };
}

module.exports = ItemPageController;
