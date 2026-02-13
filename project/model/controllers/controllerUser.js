const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { userModel } = require('../models/index');
require('dotenv').config();


//registering user
const register =  async(req,res)=>{
    const {email ,name,password} = req.body;
    const user = await userModel.findOne({email});
        if(user)
            return res.status(400).json({
        Message:'User already exists'
        })
    const hash = await bcrypt.hashSync(password,10)
    const newUser = await userModel.create({
        name,
        email,
        password:hash
    });
    return res.status(201).json({
        status:201,
        newUser,
        Message:'User created successfully!'
    })
}

//Logging in the user
const login = async (req,res)=>{
const user = await userModel.findOne({ email: req.body.email });
  if (!user) 
    return res.status(404).json({
        status:404,
        meesage: "User not found" 
    });

  const match = await bcrypt.compareSync(req.body.password, user.password);
  if (!match) return res.status(400).json({ message: "Wrong password" ,status:400});

  const token = jwt.sign({ userId: user._id },process.env.SECRET_KEY);

  res.json({ msg: "Login success", token });
};

//deleting User
const deleteUser = async (req,res)=>{
    try {
        const deleted = await User.findOne(req.params.id);
        if(!deleted)
            return res.status(400).json({
        message:'User not found!'
        })
        return res.status(200).json({
            message:'User deleted successfully!'
        })
    } catch (error) {
        return res.status(500).json({
            message:'Internal server error!'
        })
    }
}
module.exports = {
    register,
    login,
    deleteUser
};