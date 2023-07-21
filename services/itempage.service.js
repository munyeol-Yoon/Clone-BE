const ItemPageRepository = require("../repositories/itempage.repository");

class ItemPageService {
  itemPageRepository = new ItemPageRepository();
}

module.exports = ItemPageService;
