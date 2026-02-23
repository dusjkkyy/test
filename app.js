require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const categoryRoutes = require('./practice/product module/routes/categoryRoutes');
const productRoutes = require('./practice/product module/routes/prodroutes');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log('Mongoose connected succesfully!')})
.catch((err)=>console.log(err));

app.use('/category',categoryRoutes);
app.use('/product',productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));