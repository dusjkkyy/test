const {productModel}= require("../productSchema");

const createProduct = async(req,res)=>{
   try {
    const {name,price,category}=req.body;
    const productExist = await productModel.findOne({name})
    if(productExist)
    return res.status(400).json({
    message:"Product already exists!"
    })
    const createProduct = await productModel.create({
        name,
        price,
        category
    })
    res.status(200).json({
        message:"Product created succesfully",
        createProduct
    })
   } catch (error) {
    console.error(error,'error')
    res.status(500).json({
        message:"Internal server error"
    })
   }
}

const getProduct = async (req,res)=>{
    try {
        const products = await productModel.find({
            category:req.params.id
        }).populate("category","name");

        res.json({
            count : products.length,
            products
        });
    } catch (error) {
        res.status(500).json({
            message:"Internal server error!"
        })
    }};


    module.exports = {
        createProduct,
        getProduct
    }