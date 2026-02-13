const express = require('express');
const router =  express.Router();
const {create,update,deleteProduct} = require('../Controller/productController');

router.post('/create',create);
router.put('/:_id',update);
router.delete('/:_id',deleteProduct);
module.exports=router;