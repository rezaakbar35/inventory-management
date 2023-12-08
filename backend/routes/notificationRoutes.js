const express = require("express");
const router = express.Router();

const notificationController = require("../controller/notificationController");

router.get("/", notificationController.getAllNotification);
router.post("/create", notificationController.createNotification);
router.put("/:id/update", notificationController.updateNotification);

//router get by status
router.get("/status/Complaint", notificationController.getAllNotificationByComplaint)
router.get("/status/Warning", notificationController.getAllNotificationByWarning)
router.get("/status/Tracking", notificationController.getAllNotificationByTracking)
router.get("/status/Report", notificationController.getAllNotificationByReport)

router.get("/user/:username", notificationController.getAllNotificationByUser)

router.route("/:id")
  .get(notificationController.getByIdNotification)
  .delete(notificationController.deleteNotification);
  
module.exports = router;