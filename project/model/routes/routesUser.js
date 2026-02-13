const express = require('express');
const  {register, login, deleteUser} = require('../controllers/controllerUser');
const router = express.Router();

router.post('/register',register);
router.post('/login',login);
router.delete('/deleteUser/:id',deleteUser);

module.exports= router
