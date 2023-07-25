const express = require("express");
const router = express.Router();
const MainController = require("../controllers/main.controllers");
const mainController = new MainController();

router.get("/", mainController.getMain);


module.exports = router;
