const express = require("express")
const router = express.Router()
const serviceController = require("../Controllers/service-controller")

router.route("/service").get(serviceController.services)

module.exports=router
