const RegisterRepository = require("../repositories/register.repository");

class RegisterService {
  registerRepository = new RegisterRepository();
  createUser = async (email, nickname, password) => {
    const images = [
      "https://clone-be-bucket.s3.ap-northeast-2.amazonaws.com/upload/usick.jpeg",
      "https://clone-be-bucket.s3.ap-northeast-2.amazonaws.com/upload/suhwa.jpeg",
      "https://clone-be-bucket.s3.ap-northeast-2.amazonaws.com/upload/sonsuckgu.jpeg",
      "https://clone-be-bucket.s3.ap-northeast-2.amazonaws.com/upload/newminji.jpeg",
      "https://clone-be-bucket.s3.ap-northeast-2.amazonaws.com/upload/newhani.jpeg",
      "https://clone-be-bucket.s3.ap-northeast-2.amazonaws.com/upload/newhaeryn.jpeg",
      "https://clone-be-bucket.s3.ap-northeast-2.amazonaws.com/upload/newhaein.jpeg",
      "https://clone-be-bucket.s3.ap-northeast-2.amazonaws.com/upload/newdanial.jpeg",
      "https://clone-be-bucket.s3.ap-northeast-2.amazonaws.com/upload/minsick.jpeg",
      "https://clone-be-bucket.s3.ap-northeast-2.amazonaws.com/upload/madongsuck3.jpeg",
      "https://clone-be-bucket.s3.ap-northeast-2.amazonaws.com/upload/chacha.jpeg",
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];

    const createUser = await this.registerRepository.createUser(
      email,
      nickname,
      password,
      randomImage
    );

    return createUser;
  };
}

module.exports = RegisterService;
