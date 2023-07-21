const ItemPageService = require("../services/itempage.service");

class ItemPageController {
  itemPageService = new ItemPageService();
}

module.exports = ItemPageController;
