const DetailRepository = require("../repositories/detail.repository");

class DetailService {
  detailRepository = new DetailRepository();
}

module.exports = DetailService;
