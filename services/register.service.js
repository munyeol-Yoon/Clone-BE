const RegisterRepository = require("../repositories/register.repository");

class RegisterService {
  registerRepository = new RegisterRepository();
  createUser = async (email, nickname, password) => {
    const createUser = await this.registerRepository.createUser(
      email,
      nickname,
      password
    );

    return createUser;
  };
}

module.exports = RegisterService;
