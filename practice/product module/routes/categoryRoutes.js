const express = require ("express");
const router = express.Router();
const {createCategory} = require("../controllers/categorycontroller");

router.post("/createCategory",createCategory)

module.exports = router;