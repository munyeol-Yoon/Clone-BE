const express = require("express");

const authMiddleware = require("../middlewares/auth-middleware");

const UserInfoController = require("../controllers/userinfo.controller");
const userinfoController = new UserInfoController();

const router = express.Router();

router.get("/", authMiddleware, userinfoController.getUser);

module.exports = router;
