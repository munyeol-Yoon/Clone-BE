const { ItemPages } = require('../models');

class ItemPageRepository {
  findAllItem = async () => {
    const items = await ItemPages
      .findAll
      // attributes: [
      //   'itemId',
      //   'userId',
      //   'brandName',
      //   'itemName',
      //   'rating',
      //   'discount',
      //   'price',
      //   'discountprice',
      //   'benefit',
      //   'imgUrl',
      // ],
      ();
    // console.log('repo : ' + JSON.stringify(items));
    return items;
  };

  createItem = async (userId, brandName, itemName, rating, discount, price, discountPrice, benefit, imgUrl) => {
    const createItem = await ItemPages.create({
      userId,
      brandName,
      itemName,
      rating,
      discount,
      price,
      discountPrice,
      benefit,
      imgUrl,
    });

    return createItem;
  };

  updateItem = async (itemId, brandName, itemName, rating, discount, price, discountPrice, benefit, imgUrl) => {
    const updateItem = await ItemPages.update(
      { itemId, brandName, itemName, rating, discount, price, discountPrice, benefit, imgUrl },
      { where: { itemId } }
    );

    return updateItem;
  };

  deleteItem = async (userId, itemId) => {
    const deleteItem = await ItemPages.destroy({ where: { [Op.and]: [{ userId: userId }, { itemId: itemId }] } });

    return deleteItem;
  };
}

module.exports = ItemPageRepository;
