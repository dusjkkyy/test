const userModel = require ('../models/userModel');
const bcrypt = require('bcryptjs')

const create = async(req, res) => {
    try {
        const { name, email, password }=req.body;
        const userExist = await userModel.findOne({email});
        if(userExist){
            return res.status(400).json({
                message:'User already exists'
            });
        };
        const hashPassword = await bcrypt.hashSync(password, 10);
        const newUser = await userModel.create({
            name,
            password:hashPassword,
            email
        });
        res.status(200).json({
            message:'User created succesfully!',
            newUser
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error:error.message
        });
    }
};

const login = async(req, res)=>{
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).json({
                message:'User not found'
            });
        }
        const checkPassword = await bcrypt.compareSync(password,user.password);
        if(!checkPassword){
            return res.status(400).json({
                status:400,
                message:"Incorrect password"
            })
        }
        return res.status(200).json({
            status:200,
            message:'user login successfully',
            user
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            status:500,
            error:error.message,
            message:'Internal server error'
        });
    }
}
const updateUser = async(req,res)=>{
    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true,
            runValidators:true
            }
            
        );
        if (!updatedUser){
            return res.status(404).json({
                message:"User not found"
            });
        }
                res.status(200).json({
                message:'User Updated succesfully!',
                updateUser
            });
        } catch (error) {
            return res.status(500).json({
                status:500,
                message:'Internal server error'
            });
    }
};

const deleteUser = async (req,res)=>{
    try {
        const User = await userModel.findByIdAndDelete(
            req.params.id
        );

        if(!User){
            return res.status(404).json({
                message:'User not found'
            })
        }
            res.status(200).json({
            message:'User deleted succesfully',
            deleteUser
        });
    } catch (error) {
        return res.status(500).json({
            message:'Internal server Error!'
        })
    }
};


module.exports = {
    create,
    updateUser,
    deleteUser,
    login
}