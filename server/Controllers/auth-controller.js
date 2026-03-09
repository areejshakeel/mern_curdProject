const User = require("../Models/user_modal")
const bcrypt = require ("bcryptjs")






const home = async (req, res) => {
    try {
        res.status(200).json({ msg: "Home page!" })
    } catch (error) {
        res.status(400).send({ msg: "Internal server error" })
    }
}

const register = async (req, res) => {
    try {
        const { userName, email, password, phone } = req.body
        const emailExists = await User.findOne({ email })
        if (emailExists) {
            return res.status(400).json({ msg: "Email already exists" })
        }
        const userCreated = await User.create({
            userName,
            email,
            password,
            phone
        })
        res.status(201).json({
            msg: "User registered successfully",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        });
    } catch (error) {
        console.log(error, "error")
        res.status(500).json({ msg: "Internal server error" })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const userExist = await User.findOne({ email })
        console.log(userExist,"userExist")
        if (!userExist) {
            res.status(400).send({ msg: "Invalid Credentails!" })
        }
        const validUser = await bcrypt.compare(password, userExist.password)
        if (validUser) {
            res.status(200).json({
                msg: "Login Successfully",
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
            });
        } else {
            res.status(401).send({ msg: "Invalid Credentails!" })
        }

    } catch (error) {
        console.log(error, "error")
        res.status(500).send({ msg: "Internal Server Error" })
    }
}

module.exports = { home, register,login }
