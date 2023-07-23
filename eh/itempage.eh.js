const Joi = require('joi');

const itempageEH = Joi.object({
  brandName: Joi.string().required().messages({
    'string.base': '브랜드명의 데이터 타입은 문자열입니다.',
    'any.required': '브랜드명의 형식이 일치하지 않습니다.',
    'string.empty': '브랜드명은 필수 입력 항목입니다.',
  }),
  itemName: Joi.string().required().messages({
    'string.base': '상품명의 데이터 타입은 문자열입니다.',
    'any.required': '상품명의 형식이 일치하지 않습니다.',
    'string.empty': '상품명은 필수 입력 항목입니다.',
  }),
  rating: Joi.string().required().messages({
    'string.base': '별점의 데이터 타입은 문자열입니다.',
    'any.required': '별점의 형식이 일치하지 않습니다.',
    'string.empty': '별점은 필수 입력 항목입니다.',
  }),
  discount: Joi.string().required().messages({
    'string.base': '할인율의 데이터 타입은 문자열입니다.',
    'any.required': '할인율의 형식이 일치하지 않습니다.',
    'string.empty': '할인율은 필수 입력 항목입니다.',
  }),
  price: Joi.string().required().messages({
    'string.base': '상품가격의 데이터 타입은 문자열입니다.',
    'any.required': '상품가격의 형식이 일치하지 않습니다.',
    'string.empty': '상품가격은 필수 입력 항목입니다.',
  }),
  lowPrice: Joi.string().required().messages({
    'string.base': '최저가의 데이터 타입은 문자열입니다.',
    'any.required': '최저가의 형식이 일치하지 않습니다.',
    'string.empty': '최저가은 필수 입력 항목입니다.',
  }),
  highPrice: Joi.string().required().messages({
    'string.base': '최고가의 데이터 타입은 문자열입니다.',
    'any.required': '최고가의 형식이 일치하지 않습니다.',
    'string.empty': '최고가은 필수 입력 항목입니다.',
  }),
  imgUrl: Joi.string().required().messages({
    'string.base': '이미지 주소의 데이터 타입은 문자열입니다.',
    'any.required': '이미지 주소의 형식이 일치하지 않습니다.',
    'string.empty': '이미지 주소은 필수 입력 항목입니다.',
  }),
});

module.exports = { itempageEH };
