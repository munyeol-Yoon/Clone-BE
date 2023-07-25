const joi = require("joi");

const registerValidation = joi.object({
  email: joi
    .string()
    .pattern(
      new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.(com|net|co\\.kr)$")
    )
    .trim()
    .required()
    .messages({
      "string.pattern.base": "이메일 형식이 일치하지 않습니다.",
      "string.empty": "이메일이 비어있습니다.",
      "any.required": "이메일이 필요합니다.",
    }),
  nickname: joi.string().trim().min(2).max(15).required().messages({
    "string.min": "닉네임은 최소 2자리 이상이어야 합니다.",
    "string.max": "닉네임은 최대 15자리 이하이어야 합니다.",
    "any.required": "닉네임이 필요합니다.",
  }),
  password: joi
    .string()
    .trim()
    .pattern(new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"))
    .required()
    .messages({
      "string.pattern.base":
        "비밀번호는 최소 8자리 이상이며, 영문, 숫자, 특수문자(!@#$%^&*)가 모두 포함되어야 합니다.",
      "any.required": "비밀번호가 필요합니다.",
    }),
  confirm: joi.string().valid(joi.ref("password")).required().messages({
    "any.only": "비밀번호가 틀립니다.",
  }),
});

module.exports = {
  registerValidation,
};
