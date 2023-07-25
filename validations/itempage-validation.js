const Joi = reiquire('joi');

const stringValidation = Joi.string().not('').required().messages({
  'string.base': '입력한 항목의 형식이 일치하지 않습니다.',
  'string.empty': '모든 항목을 입력해 주세요.',
  'any.not': '모든 항목을 입력해 주세요.',
  'any.required': '모든 항목을 입력해 주세요.',
});

const optionValidation = Joi.string().not('').required().messages({
  'string.base': '입력한 옵션의 형식이 일치하지 않습니다.',
  'string.empty': '옵션을 입력해 주세요.',
  'any.not': '옵션을 입력해 주세요.',
  'any.required': '옵션을 입력해 주세요.',
});

const itemPageField = ['brandName', 'itemName', 'rating', 'discount', 'price'];
const optionField = ['color', 'size'];

const itemPageModels = Joi.object(
  itemPageField.reduce((itemPage, fieldName) => {
    itemPage[fieldName] = stringValidation;
    return itemPage;
  }, {})
);

const optionsModels = Joi.object(
  optionField.reduce((option, fieldName) => {
    option[fieldName] = optionValidation;
    return option;
  })
);

const itemImgListsModels = Joi.object({
  itemImg: Joi.string().not('').required().messages({
    'string.empty': '상품 이미지를 등록해 주세요.',
    'any.not': '상품 이미지를 등록해 주세요.',
    'any.required': '상품 이미지를 등록해 주세요.',
  }),
});

module.exports = { itemPageModels, optionsModels, itemImgListsModels };
