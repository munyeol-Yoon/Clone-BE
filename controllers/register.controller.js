const RegisterService = require("../services/register.service");

class RegisterController {
  registerService = new RegisterService();
}

module.exports = RegisterController;
