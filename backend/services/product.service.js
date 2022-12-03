const productModel = require("../models/product.model");

const ProductService = {
  async addProduct(product) {
    const newProduct = await productModel.create(product);
    return newProduct;
  },
  async getAllProducts() {
    return await productModel.find();
  },
  async getProduct(id) {
    return await productModel.findById(id);
  },
};

module.exports = ProductService;
