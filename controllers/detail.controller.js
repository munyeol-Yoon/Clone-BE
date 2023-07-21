const DetailService = require("../services/detail.service");

class DetailController {
  detailService = new DetailService();
}

module.exports = DetailController;
