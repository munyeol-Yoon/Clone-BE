const express = require("express");

const registerRouter = require("./register");
const loginRouter = require("./login");
const detail = require("./detail");
const itempage = require("./itempage");
const main = require("./main");
const userinfo = require("./userinfo");

const router = express.Router();

router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/main", main);
router.use("/detail", detail);
router.use("/itempage", itempage);
router.use("/userinfo", userinfo);
router.use("/logout", (req, res) => {
  res.clearCookie("cowdog");

  return res.status(200).json({ message: "로그아웃에 성공하였습니다. " });
});

module.exports = router;
