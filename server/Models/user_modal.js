const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    userName: {
        type: "string",
        require: true
    },
    email: {
        type: "string",
        require: true
    },
    password: {
        type: "string",
        require: true
    },
    phone: {
        type: "string",
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

// middleware to secure password by bcrypt
userSchema.pre("save", async function (next) {
      console.log(this, "pre userschema")
    const user = this
    console.log(user, "user")
    if (!user.isModified("password")) {
        next()
    }
    try {
        const saltRound = await bcrypt.genSaltSync(10);
        const hash_password = await bcrypt.hashSync(user.password, saltRound);
        user.password = hash_password
    } catch (error) {
        next(error)
    }
})

// json web token
userSchema.methods.generateToken  = async function(){
try{
    return jwt.sign({
        userId:this._id.toString(),
        email:this.email,
        isAdmin:this.isAdmin
    },
    process.env.JWT_SECRET_KEY,
    {
        expiresIn: "30d"
    }
)

}catch(error){
    console.error(error)
}
}

// define the modal and collection name
const User = new mongoose.model("User", userSchema)
module.exports = User