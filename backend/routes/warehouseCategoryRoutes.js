const express = require("express");
const router = express.Router();

const warehouseCategoryController = require("../controller/warehouseCategoryController");

router.get("/", warehouseCategoryController.getAllWarehouseCategory);
router.post("/create", warehouseCategoryController.createWarehouseCategory);
router.put("/:id/update", warehouseCategoryController.updateWarehouseCategory);

router.route("/:id")
  .get(warehouseCategoryController.getByIdWarehouseCategory)
  .delete(warehouseCategoryController.deleteWarehouseCategory);
  
module.exports = router;
