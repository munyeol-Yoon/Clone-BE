const { Users, DetailPages, WritePacks, ItemPages, ItemImgLists } = require('../models');
const sequelize = require('sequelize');
const { Op } = require('sequelize');

class DetailRepository {

  // 생성 권한 조회
  userCheek = async (userId) => {
    const userCheek = await Users.findOne({ where: userId })
    if (!userCheek) {
      const error = new Error('집사진의 생성 권한이 없습니다.'); // ERROR 생성자를 통해 message 전달
      error.status = 403; // ERROR 객체를 통해서 Status 추가
      throw error;
    }
  }
  // 집사진 만들기
  createDetail = async (userId, content, imgUrl) => {
    const derail = await DetailPages.create({ userId, content, imgUrl });
    return derail;
  }
  // 집사진-상품 테이블 만들기 
  createWritePack = async (itemData, detailsId) => {
    const writePackArray = itemData.map((item) => {
      return {
        detailsId,
        itemId: item.itemId,
        coordinateX: item.x,
        coordinateY: item.y
      }
    })
    const writePack = await WritePacks.bulkCreate(writePackArray)
    return writePack
  }

  // 집사진에 들어갈 아이템 구하기
  findItemId = async (detailsId) => {
    const itemId = await WritePacks.findAll({
      attributes: ['itemId'],
      where: { detailsId },
    });

    const itemIds = itemId.map((item) => {
      const Id = item.itemId;
      return Id;
    });

    return itemIds;
  };

  // 집사진 상세 조회(아이템 포함)
  findOneDetail = async (detailsId, itemIds) => {
    //? 가져오려는 집사진 정보
    const details = await DetailPages.findOne({
      where: { detailsId },
      attributes: ['detailsId', 'userId', 'content', 'imgUrl', 'createdAt', 'updatedAt'],
      group: ['detailsId'],
    });
    //? 가져오려는 집사진 정보에 들어있는 아이템들
    if (itemIds.length < 1) {
      return [details]
    }
    const itemsData = await ItemPages.findAll({
      where: {
        itemId: {
          [Op.or]: itemIds,
        },
      },
      attributes: ['itemId', 'brandName', 'itemName', 'price'],
      group: ['itemId'],
      raw: true,
      include: [
        {
          model: WritePacks,
          where: { detailsId },
          attributes: ["coordinateX", "coordinateY"],
        },
        {
          model: ItemImgLists,
          attributes: ["itemImg"],
        }
      ],
    });
    return [details, itemsData];
  };
  // 유저정보
  findUserData = async (userId) => {
    const userData = await Users.findOne({
      where: { userId },
      attributes: ['nickname', 'profileImgUrl', 'createdAt']
    })
    return userData
  }
  // 집사진 있는지 확인
  checkDetail = async (detailsId) => {
    const details = await DetailPages.findOne({ where: { detailsId } });
    return details
  }
  // 집사진 수정
  updateDetail = async (detailsId, content, imgUrl) => {
    const [details] = await DetailPages.update(
      { content, imgUrl },
      { where: { detailsId } }
    )
    return details
  }
  // 기존 데이터 제거
  deleteWritePack = async (detailsId) => {
    const deleteWritePack = await WritePacks.destroy({ where: { detailsId } })
    return deleteWritePack
  }
  // 수정된 새로운 데이터 생성
  updeateWritePack = async (detailsId, itemData) => {
    const writePackArray = itemData.map((item) => {
      return {
        detailsId,
        itemId: item.itemId,
        coordinateX: item.x,
        coordinateY: item.y
      }
    })
    const updeateWritePack = await WritePacks.bulkCreate(writePackArray)
    return updeateWritePack
  }
  // 집 사진 삭제
  deleteDetail = async (detailsId) => {
    const detail = await DetailPages.destroy({ where: { detailsId } })
    return detail
  }
}
module.exports = DetailRepository;
