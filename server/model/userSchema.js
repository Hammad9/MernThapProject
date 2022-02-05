

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    work: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    },
    tokens: [
        {
            token:{
                type:String,
                required:true,
            }
        }
    ]
})




userSchema.pre('save', async function (next) {
    console.log("Hi from inside");
    // is ka matlab kon say perticualr may chaning kay bad ham nay isko save say pehlay call karwana hai 
    
    if (this.isModified('password')) {
        // this.password is above jo password define kiya hai equal to .hash(this.password,12) 12 mean algo 
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword =await bcrypt.hash(this.cpassword, 12);
    }
    next();
});

// Here We Generating tokens
userSchema.methods.generateAuthToken = async function (){
    try{
        // Here we define the token using jwt.sign
        let token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
        // Yeah this.token schema walay ko pakray ga Phir schema walay ko concate karayga
        // firt perameter token is userSchema wala then second is above secretKeyWala
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
        
    }
    catch(err){
        console.log(err);
    }
}


// isko end par lay jae gay kiyu kay hashing nae ho rahe
const User = mongoose.model('USER', userSchema);

module.exports = User;