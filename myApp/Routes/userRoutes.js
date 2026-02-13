const express = require ('express');
const router = express.Router();
const {create,login, updateUser, deleteUser} = require ('../Controller/userController');

router.post('/createUser',create);
router.post('/login',login);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);



module.exports= router;