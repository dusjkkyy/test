const {categoryModel} = require("../category");

const createCategory = async (req,res)=>{
    try {
        const {name} = req.body
        const categoryExist = await categoryModel.findOne({name})
        if(categoryExist)
        return res.status(400).json({
            message : "Category already exists in the DB"
        })
        const createCategory = await categoryModel.create({
            name
        })
         res.status(200).json({
            message:"Category created succesfully",
            createCategory
        });
        
    } catch (error) {
         res.status(500).json({
            message:"Internal server Error"
        })
    }
}

module.exports={
    createCategory
}