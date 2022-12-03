const router = require("express").Router();

const ProductController = require("../controllers/product.controller");
const categoryModel = require("../models/category.model");

router.get("/Get/:id", ProductController.getProduct);
router.get("/GetAll", ProductController.getAllProducts);
router.post("/Add", ProductController.addProduct);
router.get("/category", async (req, res) => {
  const category = await categoryModel.create({
    name: "Test",
  });
  category.save();
  res.send("Success");
});

module.exports = router;
