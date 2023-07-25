const joi = require("joi")

const detailValidation = joi.object({
    content: joi.string().required().messages({
        'any.required': "content 가 필요합니다."
    }),
    imgUrl: joi.string().required().messages({
        'any.required': '이미지가 필요합니다.'
    }),
    itemData: joi.string().required().messages({
        'any.required': '상품 태그를 선택해주세요.'
    }),
})

module.exports = { detailValidation }