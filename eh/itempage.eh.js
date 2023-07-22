const Joi = require('joi');

const itempageEH = Joi.object({
  itemName: Joi.string().required().messages({
    'string.base': '상품명의 데이터 타입은 문자열입니다.',
    'any.required': '상품명의 형식이 일치하지 않습니다.',
    'string.empty': '상품명은 필수 입력 항목입니다.',
  }),
  price: Joi.string().required().messages({
    'string.base': '상품 가격의 데이터 타입은 문자열입니다.',
    'any.required': '상품 가격의 형식이 일치하지 않습니다.',
    'string.empty': '상품 가격은 필수 입력 항목입니다.',
  }),
  imgUrl: Joi.string().required().messages({
    'string.base': '상품 이미지의 데이터 타입은 문자열입니다.',
    'any.required': '상품 이미지의 형식이 일치하지 않습니다.',
    'string.empty': '상품 이미지는 필수 입력 항목입니다.',
  }),
});

module.exports = { itempageEH };
