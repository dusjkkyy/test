const express = require("express");
const {createProduct,getProduct} = require("../controllers/prodController");

const router = express.Router();

router.post("/createProducts",createProduct);

router.get("/showproducts",getProduct)

module.exports = router