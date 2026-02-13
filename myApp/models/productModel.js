const mongoose = require ('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema(
    {
        name:{
            type:String,
            require:true
        },
        category:{
            type:String,
            require:true
        },
        price:{
            type:Number,
            require:true
        },
        quantity:{
            type:Number,
            require:true
        }
    },
      {timestamps:true}
    )

const productModel = mongoose.model('product',productSchema);

module.exports=productModel;