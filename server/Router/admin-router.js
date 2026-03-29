const express = require("express")
const router = express.Router()
const adminController = require('../Controllers/admin-controller')
const authMiddleware = require('../Middlewares/auth-Middleware')
const adminMiddleware = require('../Middlewares/admin-Middleware')

router.route("/users").get(authMiddleware,adminMiddleware,adminController.getAllUsers)
router.route("/contacts").get(authMiddleware,adminController.getAllContacts)

module.exports = router