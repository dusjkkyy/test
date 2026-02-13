const mongoose = require(`mongoose`);
const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDb has connected successfully!")
    } catch (error) {
        console.error ("there was an error connecting mongoDb",error.message)
    }
};

module.exports=connectDb;