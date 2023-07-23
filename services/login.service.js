const LoginRepository = require("../repositories/login.repository");

class LoginService {
  loginRepository = new LoginRepository();
}

module.exports = LoginService;
