const RegisterRepository = require("../repositories/register.repository");

class RegisterService {
  registerRepository = new RegisterRepository();
  createUser = async (email, nickname, password) => {
    const images = [
      "usick.jpeg",
      "suhwa.jpeg",
      "sonsuckgu.jpeg",
      "newminji.jpeg",
      "newhani.jpeg",
      "newhaeryn.jpeg",
      "newhaein.jpeg",
      "newdanial.jpeg",
      "minsick.jpeg",
      "madongsuck3.jpeg",
      "madongsuck2.jpeg",
      "madongsuck1.jpeg",
      "chacha.jpeg",
      "dongil.jpeg",
      "dongil2.jpeg",
      "hyomanager.png",
      "saemanager.png",
      "bumgyuzzing.jpeg",
      "bumgyuzzing2.jpeg",
      "bumgyuzzing3.jpeg",
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    const profileImgUrl = `https://clone-be-bucket.s3.ap-northeast-2.amazonaws.com/upload/${randomImage}`;

    const createUser = await this.registerRepository.createUser(
      email,
      nickname,
      password,
      profileImgUrl
    );

    return createUser;
  };
}

module.exports = RegisterService;
