const { Users } = require("../models");

class UserInfoRepository {
  getUser = async (userId) => {
    const user = await Users.findOne({ where: { userId } });

    return user;
  };
}

module.exports = UserInfoRepository;
