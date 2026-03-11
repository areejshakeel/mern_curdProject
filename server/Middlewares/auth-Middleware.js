const jwt = require("jsonwebtoken")
const User = require('../Models/user_modal')

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization")
    if (!token) {
        return res.status(401).json({ message: "UnAuthorized HTTP , token was not provided" })
    }
    const jwtToken = token.replace("Bearer", "").trim()
    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY)
        console.log(isVerified, "isVerified")
        const _user= await User.findOne({email:isVerified.email}).select({password:0})
        req.user=_user
        next()
    } catch (error) {
        res.status(401).json({ message: "UnAuthorized, Invalid Token" })
    }
}
module.exports = authMiddleware