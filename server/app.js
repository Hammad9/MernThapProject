const express = require('express');

const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' })

// Link Which copy from atlas

// const DB = process.env.DATABASE;
const PORT = process.env.PORT;

require('./db/conn.js')

// User Schema Access
// const User=require('./model/userSchema')  

const app = express();

app.use(express.json());
app.use(require('./router/auth'))

// Middle Ware Define
const middleware = (req, res, next) => {
    console.log("You Are in Middle Ware")

    // Is say wo next move kar jae ga
    next()
}

// Call Middleware
// middleware()

// app.get('/', (req, res) => {
//     res.send("Hello World This is Send by Hammad");
// })

app.get('/about', middleware, (req, res) => {
    console.log("You are in about Page")
    res.send("This is About Page");
})

app.get('/contact', (req, res) => {
    res.send("This is Contact Page");
})

app.get('/register', (req, res) => {
    res.send("This is Register Page")
})



app.listen(PORT, () => {
    console.log(`Sever is Running at ${PORT}`)
})

