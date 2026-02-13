const express = require('express');
const {auth} = require('../middleware/auth');
const {createProduct,getMyProducts,deleteProduct} = require('../controllers/controllerProduct');

const router = express.Router();

router.post('/createProduct',auth,createProduct);
router.delete('/deleteProduct/:id',auth,deleteProduct);
router.get('/showProducts',auth,getMyProducts);


module.exports= router
