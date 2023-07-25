const MainService = require("../services/main.service");

class MainController {
  mainService = new MainService();

  getMain = async (req, res, next) => {
    try {
      const main = await this.mainService.getMain()
      return res.status(201).json({ main });

    } catch (error) {
      if (error.status) return res.status(error.status).json({ errorMessage: error.message });
      res.json({ errorMessage: error.message });
    }
  }
}
module.exports = MainController;