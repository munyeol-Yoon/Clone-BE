const DetailRepository = require('../repositories/detail.repository');
const { sequelize } = require("../models/index.js");
const { Transaction } = require("sequelize");

class DetailService {
  detailRepository = new DetailRepository();

  // 집사진 생성
  createDetail = async (userId, content, imgUrl, itemData) => {

    const t = await sequelize.transaction({
      isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED,
    });
    try {
      const userCheek = await this.detailRepository.userCheek(userId, { transaction: t });
      if (!userCheek) {
        await t.commit();
        const error = new Error('집사진의 생성 권한이 없습니다.');
        error.status = 403;
        throw error;
      }
      const detail = await this.detailRepository.createDetail(userId, content, imgUrl, { transaction: t });
      if (!itemData) {
        await t.commit();
        return detail;
      }

      const writepack = await this.detailRepository.createWritePack(itemData, detail.detailsId, { transaction: t });

      await t.commit();
      return detail;

    } catch (error) {
      await t.rollback();
      console.log(error);
      throw error;
    }
  };

  // 집사진 상세 조회
  // 집사진에 들어갈 아이템 ID 구하기
  findOneDetail = async (detailsId,) => {
    const itemIds = await this.detailRepository.findItemId(detailsId);
    // 집사진 상세 조회(아이템 포함)
    const [details, itemData] = await this.detailRepository.findOneDetail(detailsId, itemIds);
    // 글쓴이 정보 가져오기
    const userData = await this.detailRepository.findUserData(details.userId)
    //! 집사진이 없을 경우
    if (!details) {
      const error = new Error('집사진이 존재하지 않습니다.');
      error.status = 404
      throw error;
    }
    return [details, userData, itemData]
  };
  // 집사진 수정 
  updateDetail = async (userId, detailsId, content, imgUrl, itemData) => {
    try {
      //! 집사진이 없을 경우
      const checkdetail = await this.detailRepository.checkDetail(detailsId)
      if (!checkdetail) {
        const error = new Error('집사진이 존재하지 않습니다.');
        error.status = 404
        throw error;
      }
      //! 글쓴이가 맞는지 
      if (checkdetail.userId !== userId) {
        const error = new Error('글쓴이가 아닙니다.');
        error.status = 404
        throw error;
      }
      const t = await sequelize.transaction({
        isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED,
      });
      // 집사진 수정
      const details = await this.detailRepository.updateDetail(detailsId, content, imgUrl, { transaction: t })
      // 기존 집사진 - 상품 삭제
      const deleteWritePack = await this.detailRepository.deleteWritePack(detailsId, { transaction: t })
      // 새로운 집사진 - 상품 생성
      const writePack = await this.detailRepository.updeateWritePack(detailsId, itemData, { transaction: t })

      await t.commit();
      return details, writePack

    } catch (err) {
      await t.rollback();
      console.error(err)
    }
  }
  // 집 사진 삭제
  deleteDetail = async (userId, detailsId) => {
    try {
      const checkdetail = await this.detailRepository.checkDetail(detailsId)
      if (!checkdetail) {
        const error = new Error('집사진이 존재하지 않습니다.');
        error.status = 404
        throw error;
      }
      if (checkdetail.userId !== userId) {
        const error = new Error('글쓴이가 아닙니다.');
        error.status = 404
        throw error;
      }
      const details = await this.detailRepository.deleteDetail(detailsId)
      return details
    } catch (err) {
      console.error(err)
    }
  }
}
module.exports = DetailService;


