const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware.js');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();  
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/goals', require('./routes/goalRoutes.js'));
app.use('/api/users', require('./routes/userRoutes.js'));

app.listen(port, ()=> console.log(`server started on port ${port}`));