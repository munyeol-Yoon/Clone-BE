const ItemPageService = require("../services/itempage.service");
// const itempageEH = class ItemPageController {
//   itemPageService = new ItemPageService();

//   createItem = async (req, res) => {
//     const { itemName, price, imgUrl } = await itempageEH.validateAsync(req.body);
//     const { userId } = res.locals.user;

//     try {
//       if (userId != '1') {
//         res.status(400).json({ errorMessage: '상품 등록은 관리자만 가능합니다.' });
//       }

//       const createItem = await this.ItemPageService.createItem(userId, itemName, price, imgUrl);

//       return res.status(200).json({ message: '상품이 등록되었습니다.' });
//     } catch (err) {
//       console.error(err);
//       return res.status(400).json({ errorMessage: '상품 등록에 실패하였습니다.' });
//     }
//   };

//   updateItem = async (req, res) => {
//     const { itemName, price, imgUrl } = await itempageEH.validateAsync(req.body);
//     const { itemId } = req.params;
//     const { userId } = res.locals.user;

//     try {
//       if (userId != '1') {
//         res.status(400).json({ errorMessage: '상품 수정은 관리자만 가능합니다.' });
//       }

//       const updateItem = await this.ItemPageService.updateItem(userId, itemId, itemName, price, imgUrl);

//       return res.status(200).json({ message: '상품 정보가 수정되었습니다.' });
//     } catch (err) {
//       console.error(err);
//       res.status(400).json({ errorMessage: '상품 수정에 실패하였습니다.' });
//     }
//   };

//   deleteItem = async (req, res) => {
//     const { itemId } = req.params;
//     const { userId } = res.locals.user;

//     try {
//       if (userId != '1') {
//         res.status(400).json({ errorMessage: '상품 삭제는 관리자만 가능합니다.' });
//       }

//       const deleteItem = await this.ItemPageService.deleteItem(userId, itemId);

//       return res.status(200).json({ message: '상품이 삭제되었습니다.' });
//     } catch (err) {
//       console.error(err);
//       res.status(400).json({ errorMessage: '상품 삭제에 실패하였습니다.' });
//     }
//   };
// };

module.exports = ItemPageController;
