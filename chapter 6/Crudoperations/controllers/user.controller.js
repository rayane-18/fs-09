const { addProduct } = require("../routes/product.routes");

const router = require("express").Router();

router.post("/users", addProduct);
module.exports = router;
