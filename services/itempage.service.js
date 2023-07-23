const ItemPageRepository = require('../repositories/itempage.repository');

class ItemPageService {
  itemPageRepository = new ItemPageRepository();

  findAllItem = async () => {
    const allItems = await this.itemPageRepository.findAllItem();
    // console.log('sevice : ' + JSON.stringify(allItems));
    return allItems;
  };

  createItem = async (userId, brandName, itemName, rating, discount, price, imgUrl) => {
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
      benefit,
      imgUrl
    );

    return createItem;
  };

  updateItem = async (itemId, brandName, itemName, rating, discount, price, imgUrl) => {
    const discountPrice = (Number(price) * ((100 - Number(discount)) * 0.01)).toString();
    const benefit = Math.ceil(Number(discountPrice) * 0.001).toString();

    const updateItem = await this.itemPageRepository.updateItem(
      itemId,
      brandName,
      itemName,
      rating,
      discount,
      price,
      discountPrice,
      benefit,
      imgUrl
    );

    return updateItem;
  };

  deleteItem = async (userId, itemId) => {
    const deleteItem = await this.itemPageRepository.deleteItem(userId, itemId);

    return deleteItem;
  };
}

module.exports = ItemPageService;
