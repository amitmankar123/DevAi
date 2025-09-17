import mongoose  from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        trim: true,
        unique:true,
        lowercase:true,
        minLength : [6, "email must be good length"],
        maxLength: [50, "email length bahut jayda hai"]
    },

    password:{
        type:String,
        require : true,
        select: false
    }
})

userSchema.statics.hashpassword = async function (password){
  return await bcrypt.hash(password , 10)
}

userSchema.methods.validPassword = async function (password){
    return await bcrypt.compare(password , this.password)
}

userSchema.methods.generateJWT =  function (){
    return  jwt.sign({email : this.email}, process.env.JWT_SECERET,{
        expiresIn:'24h'
    })
}


const User = mongoose.model("user", userSchema)
export default User;