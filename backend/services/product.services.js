const mongoose = require("mongoose");
const productModel = require("../models/product.model");

const ProductService = {
  async addProduct(product) {
    const newProduct = await productModel.create(product);
    newProduct.save;
  },
};

module.exports = ProductService;
