const { productModel } = require("../models/product.model");


//create product
const createProduct = async (req, res) => {
    // console.log(req,'===============')
try {
    const userId = req.userId;
    if(!userId){
        return res.status(400).json({
            status:400,
            message:"UserId required"
        })
    }
const product = await productModel.create({
...req.body,
  userId,
  });
res.json(product);
} catch (err) {
res.status(500).json({ msg: "Product creation failed", error: err.message });
}
};


// getting  product of the user
const getMyProducts = async (req, res) => {
try {
const products = await productModel.findOne({ userId: req.userId });
res.json(products);
} catch (err) {
res.status(500).json({ msg: "Fetching products failed", error: err.message });
}
};

//deleting Products of the user
const deleteProduct = async (req,res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id);
        if(!deleted)
            return res.status(400).json({
        message : 'Product does not exists'
    })
    return res.status(200).json({
        message:'User deleted successfully'
    })
    } catch (error) {
        return res.status(500).json({
            message:'Internal Server Error!'
        })
    }
}

module.exports={
    createProduct,
    getMyProducts,
    deleteProduct
}