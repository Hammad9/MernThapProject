const express=require('express');

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

