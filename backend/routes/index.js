const router = require("express").Router();

router.use("/Product", require("./product.routes"));
router.use("/Order", require("./order.routes"));

module.exports = router;
