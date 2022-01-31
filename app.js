const express=require('express');
const mongoose=require('mongoose');

// Link Which copy from atlas

const DB="mongodb+srv://Hammad:hammad123@cluster0.1jjnq.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
}).then(()=>{
    console.log("Connection SuccessFully Created");
}).catch((err)=>console.log("No Connection "))

const app=express();


// Middle Ware Define
const middleware=(req,res,next)=>{
    console.log("You Are in Middle Ware")

    // Is say wo next move kar jae ga
    next()
}

// Call Middleware
// middleware()

app.get('/',(req,res)=>{
    res.send("Hello World This is Send by Hammad");
})

app.get('/about',middleware,(req,res)=>{
    console.log("You are in about Page")
    res.send("This is About Page");
})

app.get('/contact',(req,res)=>{
    res.send("This is Contact Page");
})

app.get('/register',(req,res)=>{
    res.send("This is Register Page")
})



app.listen(3000,()=>{
    console.log("Your Code is Running on 30000 Port")
})

