const RegisterRepository = require("../repositories/register.repository");

class RegisterService {
  registerRepository = new RegisterRepository();
}

module.exports = RegisterService;
