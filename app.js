require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./project/model/routes/routesUser');
const productRoutes = require('./project/model/routes/prodRoutes');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log('Mongoose connected succesfully!')})
.catch((err)=>console.log(err));

app.use('/user',userRoutes);
app.use('/product',productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));