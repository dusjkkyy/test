const mongoose = require ('mongoose');
const varientSchema = new mongoose.Schema({
   brand:{
    type:String,
    required:true
   },
   specifications:{
    type:Map,
    required:true
   },
   price:{
    type:Number,
    required:true
   },
   category:{
    type:String,
    required:true
   },
   stock:{
    type:Number,
    default:0
   }
});




const productSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  description:String,

  variants : [varientSchema]

});

const productModel = mongoose.model("Product",productSchema);

module.exports = {
    productModel
}
