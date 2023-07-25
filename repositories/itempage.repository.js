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
      raw: true,
    });
    return items;
  };

  // 상품 상세 조회
  findOneItem = async (itemId) => {
    const item = await ItemPages.findOne({
      attributes: ['itemId', 'brandName', 'itemName', 'rating', 'discount', 'price', 'discountprice', 'benefit'],
      where: { itemId },
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
      raw: true,
    });

    return item;
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

  // ColorOptions 생성
  createColorData = async (itemId, color) => {
    const createColorOptions = await ColorOptions.create({ itemId, color });

    return createColorOptions;
  };

  // SizeOptions 생성
  createSizeData = async (itemId, size) => {
    const createSizeOptions = await SizeOptions.create({ itemId, size });

    return createSizeOptions;
  };

  // ItemImgLists 생성
  createItemImgData = async (itemId, itemImg) => {
    const createItemImgLists = await ItemImgLists.create({ itemId, itemImg });

    return createItemImgLists;
  };

  // 상품 수정
  updateItem = async (userId, itemId, brandName, itemName, rating, discount, price, discountPrice, benefit) => {
    const updateItem = await ItemPages.update(
      { brandName, itemName, rating, discount, price, discountPrice, benefit },
      { where: { [Op.and]: [{ userId: userId }, { itemId: itemId }] } }
    );

    return updateItem;
  };

  // ColorOptions 수정
  updateColorData = async (itemId, color) => {
    console.log('repo Color : ' + itemId);
    const updateColorOptions = await ColorOptions.update({ color }, { where: { itemId } });

    return updateColorOptions;
  };

  // SizeOptions 수정
  updateSizeData = async (itemId, size) => {
    console.log('repo Color : ' + itemId);
    const updateSizeOptions = await SizeOptions.update({ size }, { where: { itemId } });

    return updateSizeOptions;
  };

  // ItemImgLists 수정
  updateItemImgData = async (itemId, ItemImg) => {
    console.log('repo Color : ' + itemId);
    const updateItemImgLists = await ItemImgLists.update({ ItemImg }, { where: { itemId } });

    return updateItemImgLists;
  };

  // 상품 삭제
  deleteItem = async (userId, itemId) => {
    const deleteItem = await ItemPages.destroy({ where: { [Op.and]: [{ userId: userId }, { itemId: itemId }] } });

    return deleteItem;
  };

  // ColorOptions 삭제
  deleteColorData = async (itemId) => {
    const deleteColorOptions = await ColorOptions.destroy({ where: { itemId } });

    return deleteColorOptions;
  };

  // SizeOptions 삭제
  deleteSizeData = async (itemId) => {
    const deleteSizeOptions = await SizeOptions.destroy({ where: { itemId } });

    return deleteSizeOptions;
  };

  // ItemImgLists 삭제
  deleteItemImgData = async (itemId) => {
    const deleteItemImgLists = await ItemImgLists.destroy({ where: { itemId } });

    return deleteItemImgLists;
  };
}

module.exports = ItemPageRepository;
