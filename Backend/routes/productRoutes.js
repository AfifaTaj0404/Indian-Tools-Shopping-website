const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// GET all products
router.get("/", productController.getProducts);

// ADD product
router.post("/", productController.addProduct);

// DELETE product
router.delete("/:id", productController.deleteProduct);

module.exports = router;








