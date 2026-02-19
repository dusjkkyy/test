const {productModel}= require("../productSchema");

const createProduct = async(req,res)=>{
    const {name,price,category}=req.body;
    const productExist = await productModel.findOne

}