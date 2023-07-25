const MainRepository = require('../repositories/main.repository');

class MainService {
  mainRepository = new MainRepository();
  getMain = async () => {
    const main = await this.mainRepository.getMain()
    return main
  }
}

module.exports = MainService;