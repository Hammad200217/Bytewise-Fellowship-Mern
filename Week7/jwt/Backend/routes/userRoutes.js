const express = require ('express');
const router = express.router();
const {registerUser, loginUser, getme} = require('../controller/userController.js');


router.post('/', registerUsers)
router.post('/login', loginUser)
router.post('/me', getme)

module.exports = router