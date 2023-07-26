const ItemPageRepository = require('../repositories/itempage.repository');

class ItemPageService {
  itemPageRepository = new ItemPageRepository();

  // 상품 전체 조회
  findAllItem = async () => {
    const allItems = await this.itemPageRepository.findAllItem();
    return allItems;
  };

  // 상품 상세 조회
  findOneItem = async (itemId) => {
    const oneItem = await this.itemPageRepository.findOneItem(itemId);
    return oneItem;
  };

  // 상품 생성
  createItem = async (userId, brandName, itemName, rating, discount, price, colorData, sizeData, itemImgData) => {
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

    const createColorData = await this.itemPageRepository.createColorData(createItem.itemId, JSON.stringify(colorData));
    const createSizeData = await this.itemPageRepository.createSizeData(createItem.itemId, JSON.stringify(sizeData));
    const createItemImgData = await this.itemPageRepository.createItemImgData(
      createItem.itemId,
      JSON.stringify(itemImgData)
    );

    return createItem;
  };

  // 상품 수정
  updateItem = async (
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
  ) => {
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

    const updateColorData = await this.itemPageRepository.updateColorData(itemId, JSON.stringify(colorData));
    const updateSizeData = await this.itemPageRepository.updateSizeData(itemId, JSON.stringify(sizeData));
    const updateItemImgData = await this.itemPageRepository.updateItemImgData(itemId, JSON.stringify(itemImgData));

    return [updateItem, updateColorData, updateSizeData, updateItemImgData];
  };

  // 상품 삭제
  deleteItem = async (userId, itemId) => {
    const deleteColorData = await this.itemPageRepository.deleteColorData(itemId);
    const deleteSizeData = await this.itemPageRepository.deleteSizeData(itemId);
    const deleteItemImgData = await this.itemPageRepository.deleteItemImgData(itemId);

    const deleteItem = await this.itemPageRepository.deleteItem(userId, itemId);

    return [deleteItem, deleteColorData, deleteSizeData, deleteItemImgData];
  };
}

module.exports = ItemPageService;
