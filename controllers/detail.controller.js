const DetailService = require('../services/detail.service');

class DetailController {
  detailService = new DetailService();
  //메인 페이지
  findAlldetail = async (req, res, next) => {
    try {
      const main = await this.detailService.findAlldetail()

      return res.status(201).json({ main });

    } catch (error) {
      if (error.status) return res.status(error.status).json({ errorMessage: error.message });
      res.json({ errorMessage: error.message });
    }
  }

  // 집사진 생성
  createDetail = async (req, res, next) => {
    try {
      const { userId } = res.locals.user
      const { content, imgUrl, itemData, } = req.body;
      const details = await this.detailService.createDetail(userId, content, imgUrl, itemData);

      return res.status(201).json({ details });
    } catch (error) {
      if (error.status) return res.status(error.status).json({ errorMessage: error.message });
      res.json({ errorMessage: error.message });
    }
  };

  // 집사진 상세 조회
  getDetailOne = async (req, res, next) => {
    try {
      const { detailsId } = req.params;
      const [details, userData, itemData] = await this.detailService.findOneDetail(detailsId);


      res.status(200).json({ details, userData, itemData });
    } catch (error) {
      if (error.status) return res.status(error.status).json({ errorMessage: error.message });
      res.json({ errorMessage: error.message });
    }
  };

  // 집사진 수정
  updateDetail = async (req, res, next) => {
    try {

      const { detailsId } = req.params;
      const { content, imgUrl, itemId } = req.body;
      const details = await this.detailService.updateDetail(detailsId, content, imgUrl, itemId)

      res.status(200).json({ Message: "집사진을 수정하였습니다" });
    } catch (error) {
      if (error.status)
        return res.status(error.status).json({ errorMessage: error.message });
      res.json({ errorMessage: error.message });
    };
  }

  // 집사진 삭제
  deleteDetail = async (req, res, next) => {
    try {
      const { detailsId } = req.params;
      const details = await this.detailService.deleteDetail(detailsId)
      res.status(200).json({ Message: "집사진을 삭제하였습니다" });
    } catch (error) {
      if (error.status)
        return res.status(error.status).json({ errorMessage: error.message });
      res.json({ errorMessage: error.message });
    };
  }
}
module.exports = DetailController;
