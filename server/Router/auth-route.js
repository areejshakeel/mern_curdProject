const express = require("express")
const router = express.Router()
const authControllers = require('../Controllers/auth-controller')
const authMiddleware = require('../Middlewares/auth-Middleware')

router.route("/").get(authControllers.home)

router.route("/register").post(authControllers.register)

router.route("/login").post(authControllers.login)

router.route("/user").get(authMiddleware,authControllers.getUser)

module.exports = router