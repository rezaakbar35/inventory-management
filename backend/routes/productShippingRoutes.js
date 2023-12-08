const express = require("express");
const productShippingController = require("../controller/productShippingController");

const router = express.Router();

router.get("/", productShippingController.getAllProductShippings);

router.post("/create", productShippingController.createProductShipping);

router.put("/:id/update", productShippingController.updateProductShipping);

router.get("/users/:username", productShippingController.getProductShippingByUser)
router.get("/warehouse/:warehouse_name", productShippingController.getProductShippingByWarehouse)

router.route("/:id")
.get(productShippingController.getProductShippingById)
.delete(productShippingController.deleteProductShipping)

module.exports = router;
