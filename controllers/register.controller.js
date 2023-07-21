// controllers/register.controller.js

const RegisterService = require("../services/register.service");
const { BadRequestError, ConflictError } = require("../utils/error.utils");

const bcrypt = require("bcrypt");

class RegisterController {
  registerService = new RegisterService();

  createUser = async (req, res, next) => {
    try {
      const { email, nickname, password, confirm } = req.body;

      if (password !== confirm) {
        throw new BadRequestError("비밀번호가 틀립니다.");
      }

      const salt = bcrypt.genSaltSync(6);
      const hashedPassword = bcrypt.hashSync(password, salt);

      const user = await this.registerService.createUser(
        email,
        nickname,
        hashedPassword
      );

      if (!user) {
        throw new ConflictError("이미 가입된 이메일 또는 닉네임입니다.");
      }

      return res.status(201).json({ message: "회원가입을 완료하였습니다." });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = RegisterController;
