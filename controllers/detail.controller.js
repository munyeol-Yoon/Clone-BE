const DetailService = require("../services/detail.service");

const { detailValidation } = require('../validations/detail.validation')
// 스키마

class DetailController {
  detailService = new DetailService();

  // 이미지 업로드
  createImage = async (req, res, next) => {
    try {
      const url = req.file.location;
      return res.status(201).json({ url });
    } catch (error) {
      if (error.status)
        return res.status(error.status).json({ errorMessage: error.message });
      res.json({ errorMessage: error.message });
    }
  };

  // 집사진 생성
  createDetail = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { content, itemData, imgUrl } = await detailValidation.validateAsync(req.body);

      const details = await this.detailService.createDetail(
        userId,
        content,
        imgUrl,
        itemData
      );

      return res.status(201).json({ details });
    } catch (error) {
      console.log(error)
      if (error.isJoi) {
        return res.status(409).json({ errorMessage: error.message })
      }
      if (error.status) {
        return res.status(error.status).json({ errorMessage: error.message });
      }
      res.json({ errorMessage: error.message });
    }
  };

  // 집사진 상세 조회
  getDetailOne = async (req, res, next) => {
    try {
      const { detailsId } = req.params;
      const [details, userData, itemData] =
        await this.detailService.findOneDetail(detailsId);

      res.status(200).json({ details, userData, itemData });
    } catch (error) {
      if (error.status)
        return res.status(error.status).json({ errorMessage: error.message });
      res.json({ errorMessage: error.message });
    }
  };

  // 집사진 수정
  updateDetail = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { detailsId } = req.params;
      const { content, imgUrl, itemData } = await detailValidation.validateAsync(req.body);
      const details = await this.detailService.updateDetail(
        userId,
        detailsId,
        content,
        imgUrl,
        itemData
      );

      res.status(200).json({ Message: "포스트를 생성하였습니다" });
    } catch (error) {
      if (error.status)
        return res.status(error.status).json({ errorMessage: error.message });
      if (error.isJoi) return res.status(409).json({ errorMessage: error.detail[0].message })
      res.json({ errorMessage: error.message });
    }
  };

  // 집사진 삭제
  deleteDetail = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { detailsId } = req.params;
      const details = await this.detailService.deleteDetail(userId, detailsId);
      res.status(200).json({ Message: "포스트를 삭제하였습니다" });
    } catch (error) {
      if (error.status)
        return res.status(error.status).json({ errorMessage: error.message });
      res.json({ errorMessage: error.message });
    }
  };
}
module.exports = DetailController;
