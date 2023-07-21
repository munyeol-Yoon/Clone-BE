const LoginService = require("../services/login.service");

class LoginController {
  loginService = new LoginService();
}

module.exports = LoginController;
