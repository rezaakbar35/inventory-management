const express = require("express");
const router = express.Router();

const notificationController = require("../controller/notificationController");

router.get("/", notificationController.getAllNotification);
router.post("/create", notificationController.createNotification);
router.put("/:id/update", notificationController.updateNotification);

router.route("/:id")
  .get(notificationController.getByIdNotification)
  .delete(notificationController.deleteNotification);
  
module.exports = router;