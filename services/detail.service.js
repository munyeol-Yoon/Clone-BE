const DetailRepository = require('../repositories/detail.repository');

class DetailService {
  detailRepository = new DetailRepository();

  // 집사진 생성
  createDetail = async (userId, content, imgUrl, itemData) => {
    try {
      // 이후에 트렌젝션 묶음
      const userCheek = this.detailRepository.userCheek(userId);

      const detail = await this.detailRepository.createDetail(userId, content, imgUrl);
      if (!itemData) {
        return detail
      }
      const writepack = await this.detailRepository.createWritePack(itemData, detail.detailsId)

      return detail
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  // 집사진 상세 조회

  // 집사진에 들어갈 아이템 ID 구하기
  findOneDetail = async (detailsId,) => {
    const itemIds = await this.detailRepository.findItemId(detailsId);
    // 집사진에 필요한 아이템 디테일 조회
    const [details, itemData] = await this.detailRepository.findOneDetail(detailsId, itemIds);
    // 유저 정보 가져오기
    const userData = await this.detailRepository.findUserData(details.userId)
    //! 집사진이 없을 경우
    if (!details) {
      const error = new Error('집사진이 존재하지 않습니다.');
      error.status = 404
      throw error;
    }
    return [details, userData, itemData]
  };

  // 집사진 수정 - fix 필요함
  updateDetail = async (userId, detailsId, content, imgUrl, itemData) => {
    try {
      //! 집사진이 없을 경우
      const checkdetail = await this.detailRepository.checkDetail(detailsId)
      if (!checkdetail) {
        const error = new Error('집사진이 존재하지 않습니다.');
        error.status = 404
        throw error;
      }
      console.log(checkdetail.userId !== userId)
      if (checkdetail.userId !== userId) {
        const error = new Error('글쓴이가 아닙니다.');
        error.status = 404
        throw error;
      }
      const details = await this.detailRepository.updateDetail(detailsId, content, imgUrl)
      const deleteWritePack = await this.detailRepository.deleteWritePack(detailsId)
      const writePack = await this.detailRepository.updeateWritePack(detailsId, itemData)

      return details, writePack
    } catch (err) {
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


