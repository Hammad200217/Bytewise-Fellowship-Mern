const Express = require('express');
const Mongoose = require('mongoose');
const Cors = require('cors');
const userModel = require('./models/User');


// Create an Express app
const app = Express();
app.use(Cors());
app.use(Express.json());

// Connect to MongoDB
Mongoose.connect('mongodb://localhost:27017/mern');

// Define routes
app.post('/login', (req, res) =>{
    const { email, password } = req.body;
    userModel.findOne({email: email})
    .then(Users => {
        if(Users){   
        if(Users.password === password){
            res.json("Sucessfully logged in")
        } else {
            res.json( 'The password is incorrect')

        }}
        else {
            res.json('User not found')
        }


    })
})
app.post('/register', (req, res) =>{
 userModel.create(req.body)
 .then(Users => res.json(Users))
 .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});


