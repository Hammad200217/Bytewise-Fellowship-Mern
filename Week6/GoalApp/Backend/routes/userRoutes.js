const express = require ('express');
const router = express.router();
const {registerUser} = require('../controller/userController.js');


router.post('/', registerUser)

module.exports = router