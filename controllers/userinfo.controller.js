const UserInfoService = require("../services/userinfo.service");

class UserInfoController {
  userinfoService = new UserInfoService();

  getUser = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;

      const user = await this.userinfoService.getUser(userId);

      return res.status(200).json({ user });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
}

module.exports = UserInfoController;
