const ItemPageRepository = require('../repositories/itempage.repository');
const { ItemPages } = require('../models');

class ItemPageService {
  itemPageRepository = new ItemPageRepository(ItemPages);

  createItem = async (userId, itemName, price, imgUrl) => {
    const item = await this.ItemPageRepository.createItem(userId, itemName, price, imgUrl);

    return item;
  };

  updateItem = async (userId, itemId, itemName, price, imgUrl) => {
    const updateItem = await this.ItemPageRepository.updateItem(userId, itemId, itemName, price, imgUrl);

    return updateItem;
  };

  deleteItem = async (userId, itemId) => {
    const deleteItem = await this.ItemPageRepository.deleteItem(userId, itemId);

    return deleteItem;
  };
}

module.exports = ItemPageService;
