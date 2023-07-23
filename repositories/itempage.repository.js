const { Op } = require('sequelize');
const { ItemPages, ColorOptions, SizeOptions, ItemImgLists } = require('../models');

class ItemPageRepository {
  // 상품 전체 조회
  findAllItem = async () => {
    const items = await ItemPages.findAll({
      attributes: ['itemId', 'brandName', 'itemName', 'rating', 'discount', 'price', 'discountprice', 'benefit'],
      include: [
        {
          model: ColorOptions,
          attributes: ['color'],
          required: true,
        },
        {
          model: SizeOptions,
          attributes: ['size'],
          required: true,
        },
        {
          model: ItemImgLists,
          attributes: ['itemImg'],
          require: true,
        },
      ],
    });
    return items;
  };

  // 상품 생성
  createItem = async (userId, brandName, itemName, rating, discount, price, discountPrice, benefit) => {
    const createItem = await ItemPages.create({
      userId,
      brandName,
      itemName,
      rating,
      discount,
      price,
      discountPrice,
      benefit,
    });

    return createItem;
  };

  // 상품 수정
  updateItem = async (userId, itemId, brandName, itemName, rating, discount, price, discountPrice, benefit) => {
    const updateItem = await ItemPages.update(
      { brandName, itemName, rating, discount, price, discountPrice, benefit },
      { where: { [Op.and]: [{ userId: userId }, { itemId: itemId }] } }
    );

    return updateItem;
  };

  // 상품 삭제
  deleteItem = async (userId, itemId) => {
    const deleteItem = await ItemPages.destroy({ where: { [Op.and]: [{ userId: userId }, { itemId: itemId }] } });

    return deleteItem;
  };
}

module.exports = ItemPageRepository;
