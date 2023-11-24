const express = require("express");
const router = express.Router();

const warehouseController = require("../controller/warehouseController");

router.get("/", warehouseController.getAllWarehouse);
router.post("/create", warehouseController.createWarehouse);
router.put("/:id/update", warehouseController.updateWarehouse);
router.route("/:id") 
.get(warehouseController.getByIdWarehouse)
.delete(warehouseController.deleteWarehouse)


module.exports = router;
