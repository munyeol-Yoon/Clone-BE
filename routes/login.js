const express = require("express");
const passport = require("passport");

const LoginController = require("../controllers/login.controller");
const loginController = new LoginController();

const router = express.Router();

router.post("/", loginController.loginUser);
router.get("/kakao", passport.authenticate("kakao"));

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", { failureRedirect: "/login" }),
  (req, res) => {
    // 인증이 성공하면 리다이렉트 경로를 설정
    res.redirect("/");
  }
);

module.exports = router;
