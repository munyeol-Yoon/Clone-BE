const LoginService = require("../services/login.service");
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class LoginController {
  loginService = new LoginService();

  loginUser = async (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        console.log(err);
        next(err);
      }
      if (!user) {
        return res.status(401).json({ errorMessage: info.errorMessage });
      }

      req.logIn(user, (err) => {
        if (err) {
          console.log(err);
          return next(err);
        }

        const token = jwt.sign(
          { userId: user.userId },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );

        res.cookie("Authorization", `Bearer ${token}`);

        return res.status(200).json({ message: "로그인 성공", token });
      });
    })(req, res, next);
  };
}

module.exports = LoginController;
