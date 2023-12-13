const { addProduct } = require("../routes/product.routes");

const router = require("express").Router();

router.post("/products", addProduct);
module.exports = router;
