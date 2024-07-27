const jwt = require('jasonwebtoken');
const  bcrypt = require ('bcryptjs');
const asyncHandler = require('express-async-handler');
const user = require('../models/userModel');
//@desc register user
// @routes post/ api/ users
//@access public
const registerUser= asyncHandler(async(req, res) => {

    const {name , email, password}= req.body
    if (!name || !email|| !password){
        res.error(400)
        throw new Error('Please add All feilds')
    }

//check user
const userExists =await UserActivation.findOne({email})
    if(userExists){
        res.status(400);
        throw new Error('User alreading Exist')

    }

// Hash Password
const Salt = await bcrypt.getSalt(10)
const hashedPassword = await bcrypt.hash(password , Salt)

//create User
const user = await User.create({
    name , 
    email,
    password: hashedPassword
    
})
if(user){
    res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email

})}
else {
    res.status(400);
    throw new Error('Invalid User Data');
}

    res.json({message: 'Register User'})
})
//@desc Authenticate user
// @routes post/ api/ users/login
//@access public
const loginUser= asyncHandler(async(res, req)=>{
    const {email, password}= req.body
    // check for user
    const user = await User.findOne({email})
if(user && (await bcrypt.compare(password, user.password))){
    res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
       token: generationtoken(user._id)
    })
}
else{
    res.status(401)
    throw new Error('Invalid Email or Password')
}
})
//@desc get user 
// @routes get/ api/ users
//@access public
const getme= asyncHandler(async(res, req)=>{
  const { _id, name, email } = await User.findById(req.user._id )

  res.status(200).json({
      _id,
      name,
      email
  })
    
    
    
})

// genrate token
const generationtoken = (id) => {
    return jwt.sign({id: user._id}, process.env.JWT_SECRET,{
    expiresIn: '30d'
}) 
}
module.exports ={
    registerUser, 
}