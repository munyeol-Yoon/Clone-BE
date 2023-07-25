const joi = require('joi');

// 상품페이지 > 상품정보
const itemPageField = ['brandName', 'itemName', 'rating', 'discount', 'price'];

const stringValidation = joi.string().not('').required().messages({
  'string.base': '입력한 항목의 형식이 일치하지 않습니다.',
  'string.empty': '모든 항목을 입력해 주세요.',
  'any.not': '모든 항목을 입력해 주세요.',
  'any.invalid': '모든 항목을 입력해 주세요.',
  'any.required': '모든 항목을 입력해 주세요.',
});

const itemPageModels = joi.object(
  itemPageField.reduce((itemPage, fieldName) => {
    itemPage[fieldName] = stringValidation;
    return itemPage;
  }, {})
);

//! colorData, sizeData, itemImgData 의 경우 데이터를 입력받을 때 req.body 안에 배열 형태로 입력한다.
//! 배열은 STRING 이 아니기 때문에 DataTypes 을 배열로 지정할 수 있는 방법이 없을까 찾아보았다.
//! 안타깝게도 MYSQL 에서는 지원하지 않기 때문에 불가피하게 3가지 에러처리에 대해서는 제외하였다.
//! PostgreSQL 로 했다면 Sequelize.ARRAY 가 사용이 가능한 것을 알게되었다.

// 상품페이지 > 옵션
// const optionField = ['color', 'size'];

// const optionValidation = joi.not('').required().messages({
//   'any.not': '옵션을 입력해 주세요.',
//   'any.required': '옵션을 입력해 주세요.',
// });

// const optionsModels = joi.object(
//   optionField.reduce((option, fieldName) => {
//     option[fieldName] = optionValidation;
//     return option;
//   }, {})
// );

// 상품페이지 > 상품이미지
// const itemImgListsModels = joi.object({
//   itemImg: joi.string().not('').required().messages({
//     'string.base': '입력한 항목의 형식이 일치하지 않습니다.',
//     'string.empty': '상품 이미지를 등록해 주세요.',
//     'any.not': '상품 이미지를 등록해 주세요.',
//     'any.required': '상품 이미지를 등록해 주세요.',
//   }),
// });

module.exports = { itemPageModels };
