const joi = reiquire('joi');

// 상품페이지 > 상품정보
const itemPageField = ['brandName', 'itemName', 'rating', 'discount', 'price'];

const stringValidation = joi.string().not('').required().messages({
  'string.base': '입력한 항목의 형식이 일치하지 않습니다.',
  'string.empty': '모든 항목을 입력해 주세요.',
  'any.not': '모든 항목을 입력해 주세요.',
  'any.required': '모든 항목을 입력해 주세요.',
});

const itemPageModels = joi.object(
  itemPageField.reduce((itemPage, fieldName) => {
    itemPage[fieldName] = stringValidation;
    return itemPage;
  }, {})
);

// 상품페이지 > 옵션
const optionField = ['color', 'size'];

const optionValidation = joi.not('').required().messages({
  'any.not': '옵션을 입력해 주세요.',
  'any.required': '옵션을 입력해 주세요.',
});

const optionsModels = joi.object(
  optionField.reduce((option, fieldName) => {
    option[fieldName] = optionValidation;
    return option;
  })
);

// 상품페이지 > 상품이미지
const itemImgListsModels = joi.object({
  itemImg: joi.string().not('').required().messages({
    'string.base': '입력한 항목의 형식이 일치하지 않습니다.',
    'string.empty': '상품 이미지를 등록해 주세요.',
    'any.not': '상품 이미지를 등록해 주세요.',
    'any.required': '상품 이미지를 등록해 주세요.',
  }),
});

module.exports = { itemPageModels, optionsModels, itemImgListsModels };
