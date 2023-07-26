const UserInfoRepository = require("../repositories/userinfo.repository");

class UserInfoService {
  userinfoRepository = new UserInfoRepository();

  getUser = async (userId) => {
    const user = await this.userinfoRepository.getUser(userId);

    return user;
  };
}

module.exports = UserInfoService;
