const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send("Hello World This is Send by Hammad");
})

app.get('/about',(req,res)=>{
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

