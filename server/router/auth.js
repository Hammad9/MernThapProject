const express = require('express');
const bcrypt = require('bcryptjs');

const jwt=require('jsonwebtoken')

require('../db/conn');

const User = require('../model/userSchema');


// is kay andar router ke file ho ge
const router = express.Router();

router.get('/', (req, res) => {
    // res.cookie("Test","Thapa");
    res.send("This is Router Home Page")
})

router.get('/contact',(req,res)=>{
    res.send("This is Contact Page")
})

// Below Using Promises

/*
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
    
        // user Already Existing email to nae addd kar raha
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

)
*/


// Using Async Await
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    // Here Authentication 
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: 'Please Fille All The field' })
    }
    try {

        // user Already Existing email to nae addd kar raha
        const userExit = await User.findOne({ email: email })
        if (userExit) {
            return res.status(422).json({ error: "Email Is Not Matched" })
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "Password Is Not Matched" })

        }
        else {

            const user = new User({ name, email, phone, work, password, cpassword })

            await user.save()
            res.status(201).json({ message: "User Register Succefully" })
        }

    }

    catch (err) {
        console.log(err)
    }

}



)

// For Login Data
router.post('/signin', async (req, res) => {
    // console.log(req.body),
    // res.json({message:"Awoesome"})
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please Filled the data" })
        }
        // find karo jo user nay email de or database ke 
        // yeah user.find promise return karta hai so we fullfill
        const userlogin = await User.findOne({ email: email });

        // Here is the code of Check HashPassword and email Login
        
        
        // console.log(isMatch)
        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
           
            const token=await userlogin.generateAuthToken();
            console.log(token)   //for print token which generate

            // Here Store JWT token into cookies
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+258900000),
                httpOnly:true,
            })
            // Here Check the password
            if (!isMatch) {
                res.json({ error: "User Credientials" })
            }
            else {
                res.json({ message: "User Signin Succefully " })
            }
        }
        else{
            res.json({error:"User Email is Invalid"})
        }



    }
    catch (err) {
        console.log(err);
    }
})

module.exports = router;