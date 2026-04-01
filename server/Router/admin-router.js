const express = require("express")
const router = express.Router()
const adminController = require('../Controllers/admin-controller')
const authMiddleware = require('../Middlewares/auth-Middleware')
const adminMiddleware = require('../Middlewares/admin-Middleware')

router.route("/users").get(authMiddleware,adminMiddleware,adminController.getAllUsers)
router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware,adminController.deleteUserbyId)
router.route("/contacts").get(authMiddleware,adminController.getAllContacts)

module.exports = router