const multer = require("multer");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");
const env = require("dotenv");

env.config();

AWS.config.update({
    region: "ap-northeast-2",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

const upload = multer({
    storage: multerS3({
        s3: new AWS.S3(),
        bucket: "clone-be-bucket",
        contentType: multerS3.AUTO_CONTENT_TYPE, // 자동으로 콘텐츠 타입 세팅
        // acl: "public-read", // 권한
        key: function (req, file, cb) {
            cb(null, `upload/${Date.now().toString()}`); // upload폴더에 현재시간으로 파일이름을 설정, 시간순
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5메가로 용량 제한 / 사이즈 제한
});

module.exports = upload;