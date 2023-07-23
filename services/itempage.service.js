const ItemPageRepository = require('../repositories/itempage.repository');

class ItemPageService {
  itemPageRepository = new ItemPageRepository();

  // 상품 전체 조회
  findAllItem = async () => {
    const allItems = await this.itemPageRepository.findAllItem();
    return allItems;
  };

  // 상품 생성
  createItem = async (userId, brandName, itemName, rating, discount, price) => {
    const discountPrice = (Number(price) * ((100 - Number(discount)) * 0.01)).toString();
    const benefit = Math.ceil(Number(discountPrice) * 0.001).toString();

    const createItem = await this.itemPageRepository.createItem(
      userId,
      brandName,
      itemName,
      rating,
      discount,
      price,
      discountPrice,
      benefit
    );

    return createItem;
  };

  // 상품 수정
  updateItem = async (userId, itemId, brandName, itemName, rating, discount, price) => {
    const discountPrice = (Number(price) * ((100 - Number(discount)) * 0.01)).toString();
    const benefit = Math.ceil(Number(discountPrice) * 0.001).toString();

    const updateItem = await this.itemPageRepository.updateItem(
      userId,
      itemId,
      brandName,
      itemName,
      rating,
      discount,
      price,
      discountPrice,
      benefit
    );

    return updateItem;
  };

  // 상품 삭제
  deleteItem = async (userId, itemId) => {
    const deleteItem = await this.itemPageRepository.deleteItem(userId, itemId);

    return deleteItem;
  };
}

module.exports = ItemPageService;
