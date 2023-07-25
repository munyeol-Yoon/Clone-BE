// controllers/register.controller.js

const RegisterService = require("../services/register.service");
const { BadRequestError, ConflictError } = require("../utils/error.utils");

const { registerValidation } = require("../validations/auth.validation");
const bcrypt = require("bcrypt");

class RegisterController {
  registerService = new RegisterService();

  createUser = async (req, res, next) => {
    try {
      const { email, nickname, password, confirm } =
        await registerValidation.validateAsync(req.body);

      const salt = bcrypt.genSaltSync(6);
      const hashedPassword = bcrypt.hashSync(password, salt);

      const user = await this.registerService.createUser(
        email,
        nickname,
        hashedPassword
      );

      return res.status(201).json({ message: "회원가입을 완료하였습니다." });
    } catch (err) {
      console.log(err);
      if (err.isJoi) return res.status(409).json({ errorMessage: err.message });
      next(err);
    }
  };
}

module.exports = RegisterController;
