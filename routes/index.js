const express = require("express");

const registerRouter = require("./register");
const loginRouter = require("./login");
const detail = require("./detail");
const itempage = require("./itempage");

const router = express.Router();

router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/detail", detail);
router.use("/itempage", itempage);

module.exports = router;
