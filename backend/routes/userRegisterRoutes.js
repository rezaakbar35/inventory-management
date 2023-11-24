const express = require("express");
const userRegisterController = require("../controller/userRegisterController");
const router = express.Router();


router.post(
  "/register",
  userRegisterController.createUserRegister
);

module.exports = router;