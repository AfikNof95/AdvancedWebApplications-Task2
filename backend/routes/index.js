const router = require("express").Router();

router.use("/Product", require("./product.routes"));

module.exports = router;
