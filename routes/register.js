const express = require("express");

const RegisterController = require("../controllers/register.controller");
const registerController = new RegisterController();

const router = express.Router();

router.post("/", registerController.createUser);

module.exports = router;
