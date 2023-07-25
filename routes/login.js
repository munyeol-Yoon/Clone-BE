const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const LoginController = require("../controllers/login.controller");
const loginController = new LoginController();

const router = express.Router();

router.post("/", loginController.loginUser);
router.get("/kakao", passport.authenticate("kakao"));

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", { failureRedirect: "/login" }),
  (req, res) => {
    const user = req.user;

    // JWT 생성
    const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // JWT를 쿠키에 담아 클라이언트에게 전달
    res.cookie("cowdog", `Bearer ${token}`);
    res.redirect("https://flatland.shop/");
  }
);

module.exports = router;
