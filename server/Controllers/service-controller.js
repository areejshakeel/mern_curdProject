const Service = require("../Models/service_modal")

const services = async (req, res) => {
    try {
        const response = await Service.find()
        if (!response) {
            res.status(404).json({ message: "NO SERVICE FOUND" })
        }
        res.status(200).json({ message: response })
    } catch (error) {

    }
}
module.exports = { services }