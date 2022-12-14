const ProductService = require("../services/product.service");

const ProductController = {
  async getProduct(req, res) {
    try {
      const product = await ProductService.getProduct(id);
      return res.json({ data: product });
    } catch (ex) {
      console.error(ex.message);
      console.log(ex.stack);
      res.status(400).send(ex.message);
    }
  },

  async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      return res.json({ data: products });
    } catch (ex) {
      console.error(ex.message);
      console.log(ex.stack);
      res.status(400).send(ex.message);
    }
  },

  async addProduct(req, res) {
    try {
      const product = await ProductService.addProduct(req.body);
      return res.json({ data: product });
    } catch (ex) {
      console.error(ex.message);
      console.log(ex.stack);
      return res.status(400).send(ex.message);
    }
  },
};

module.exports = ProductController;
