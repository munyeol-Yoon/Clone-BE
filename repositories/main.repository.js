const { Users, DetailPages } = require('../models');

class MainRepository {

  getMain = async () => {
    const main = await DetailPages.findAll({
      attributes: ['detailsId', 'imgUrl'],
      raw: true,
      order: [['updatedAt', 'DESC']],
      include: [
        {
          model: Users,
          attributes: ['nickname', 'profileImgUrl', 'createdAt'],
        },
      ],
    })
    return main
  }
}


module.exports = MainRepository;
