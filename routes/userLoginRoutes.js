const express = require("express");
const userLoginController = require("../controller/userLoginController");
const router = express.Router();

router.post(
  "/login",
  userLoginController.createUserLogin
);

module.exports = router;