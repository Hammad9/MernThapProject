const express=require('express');

// is kay andar router ke file ho ge
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("This is Router Home Page")
})

router.post('/register',(req,res)=>{
    console.log(req.body)
    res.send("This is Register Pge");

    res.json({message:req-body})
})

module.exports=router;