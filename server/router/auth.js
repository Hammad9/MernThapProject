const express=require('express');

require('../db/conn');

const User = require('../model/userSchema');


// is kay andar router ke file ho ge
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("This is Router Home Page")
})

router.post('/register',(req,res)=>{
    // console.log(req.body)
    // res.send("This is Register Pge");

    // res.json({message:req.body})

    // Object Destructuring
    const {name,email,phone,work,password,cpassword}=req.body;

    // Here Authentication 
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:'Please Fille All The field'})
    }
    else{
        User.findOne({email:email}).then((userExit)=>{
            if(userExit){
                return res.status(422).json({error:"Email Is Not Matched"})
            }
        })

        const user=new User({name,email,phone,work,password,cpassword})

        user.save().then(()=>{
            console.log("User Data")
        }).catch(err=>{console.log("Data not Save")})

    }

})

module.exports=router;