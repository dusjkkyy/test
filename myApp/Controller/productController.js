const productModel = require('../models/productModel');



const create = async(req,res)=>{
    try {
        const{name,category,price,quantity}=req.body;
        const productExist = await  productModel.findOne({name})
        if(productExist){
            return res.status(400).json({
                message:'Product already exists'
            })
        }
        const newProduct = await productModel.create({
            name,
            category,
            price,
            quantity
        });
            res.status(200).json({
            message:'Product created succesfully',
            newProduct
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message:'Internal server error'
        })
    }
};


const update = async(req,res)=>{
    try {
        const updateProduct = await productModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true,
            runValidators:true
            })
            if(!updateProduct)
                return res.status(400).json({
                message:'There are no matching products'
                });
            return res.status(200).json({
                message:'Product updated successfully'
            })
    } catch (error) {
        return res.status(500).json({
            status:500,
            message:'Internal server error'
        })};
}

const deleteProduct = async(req,res)=>{
    try {
        const deleteProd = await productModel.findByIdAndDelete(
            req.params.id,
            {new:true,
             runValidators:true
            }
        )
        if(!deleteProd)
            return res.status(400).json({
            message:'No product found!'
            })

            res.status(200).json({
                message:'Product deleted succesfully!'
            })

    } catch (error) {
        return res.status(500).json({
            status:500,
            message:'Internal server error'
    })}
}


module.exports={
    create,
    update,
    deleteProduct
}