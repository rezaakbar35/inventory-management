const express = require('express');
const router = express.Router();
const productController = require("../controller/productController")
const uploadProductImage = require('../multer')


router.post('/create', uploadProductImage.single('product_image'), productController.createProduct);
router.get('/', productController.getAllProduct);
router.put('/:id/update', uploadProductImage.single('product_image'), productController.updateProduct);

router.route("/:id")
.get(productController.getByIdProduct)
.delete(productController.deleteProduct)

module.exports = router;