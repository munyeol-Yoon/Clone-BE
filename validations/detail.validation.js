const joi = require("joi")

const detailValidation = joi.object({
  content: joi.string().required().messages({
    'any.required': "content 가 필요합니다.",
    'string.empty': 'content 가 필요합니다.'
  }),
  imgUrl: joi.string().required().messages({
    'any.required': '이미지가 필요합니다.',
    'string.empty': '이미지가 필요합니다.'
  }),
  itemData: joi.array().items(
    joi.object({
      "itemId": joi.number().required().messages({
        'any.required': 'itemID가 필요합니다(1).',
        'string.empty': 'itemID가 필요합니다(2).',
        'number.base': 'itemID는 숫자만 됩니다.'
      }),
      "x": joi.number().required().messages({
        'any.required': 'x좌표값이 필요합니다(1)',
        'number.empty': 'x좌표값이 필요합니다(2).',
        'number.base': 'x좌표값은 숫자만 됩니다.'
      }),
      "y": joi.number().required().messages({
        'any.required': 'y좌표값이 필요합니다(1)',
        'number.empty': 'y좌표값이 필요합니다(2)',
        'number.base': 'y좌표값은 숫자만 됩니다.'
      })
    }
    ))
    .min(1).required().messages({
      'any.required': '상품 태그가 하나 이상 있어야 합니다(1)',
      'array.empty': '상품 태그가 하나 이상 있어야 합니다(2).',
      'array.base': '데이터 형태가 잘 못 되었습니다.(배열)',
      'array.min': '상품 태그가 하나 이상 있어야 합니다(3).'
    }),
})

module.exports = { detailValidation }