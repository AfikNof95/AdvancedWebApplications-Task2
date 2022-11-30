const ProductService = require("../services/product.services");

const ProductController = {
  async getProduct(req, res) {
    try {
      const product = await ProductService.getProduct(id);
      return res.json({ data: product });
    } catch (ex) {
      console.error(ex.message);
      console.log(ex.stack);
      res.status(400).send(new Error("Error has occurred"));
    }
  },

  async addProduct(req, res) {
    try {
      const product = await ProductService.addProduct(req.body);
      return res.json({ data: product });
    } catch (ex) {
      console.error(ex.message);
      console.log(ex.stack);
      res.status(400).send(new Error("Error has occurred"));
    }
  },
};

module.exports = ProductController;
