const express = require("express");
const userLoginController = require("../controller/userLoginController");
const router = express.Router();

router.post(
  "/login",
  userLoginController.createUserLogin
);

router.get("/login/user/:id", userLoginController.getSpecificUser)

module.exports = router;