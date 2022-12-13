const router = require("express").Router();
const ProductController = require("../controllers/product.controller");

router.get("/Get/:id", ProductController.getProduct);
router.get("/GetAll", ProductController.getAllProducts);
router.post("/Add", ProductController.addProduct);

module.exports = router;
