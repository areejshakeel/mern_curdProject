const express = require("express")
const router = express.Router()
const contactController = require("../Controllers/contact-controller")

router.route("/contact").post(contactController.contactForm)
module.exports =  router