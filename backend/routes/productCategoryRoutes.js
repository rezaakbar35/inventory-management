const express = require("express");
const router = express.Router();

const productCategoryController = require("../controller/productCategoryController");

router.get("/", productCategoryController.getAllProductCategory);
router.post("/create", productCategoryController.createProductCategory);
router.put("/:id/update", productCategoryController.updateProductCategory);

router.route("/:id")
  .get(productCategoryController.getProductCategoryByID)
  .delete(productCategoryController.deleteProductCategory);
  
module.exports = router;
