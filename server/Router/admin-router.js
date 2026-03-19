const express = require("express")
const router = express.Router()
const adminController = require('../Controllers/admin-controller')

router.route("/users").get(adminController.getAllUsers)
router.route("/contacts").get(adminController.getAllContacts)

module.exports = router