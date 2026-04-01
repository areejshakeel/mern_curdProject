const Users = require('../Models/user_modal')
const Contacts = require("../Models/contact_modal")

const getAllUsers = async (req, res) => {
    try {
        const _users = await Users.find().select({password:0})
        if (!_users || _users.length == 0) {
            return res.status(404).json({ message: "Users Not Found" })
        }
        return res.status(200).json(_users)
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error" })
    }
}
const getAllContacts = async (req, res) => {
    try {
        const _contact = await Contacts.find()
        if (!_contact || _contact.length == 0) {
            return res.status(404).json({ message: "Contacts Not Found" })
        }
        return res.status(200).json(_contact)
    } catch (error) {
        console.log(error,"error")
        return res.status(500).json({ msg: "Internal Server Error" })
    }
}
const deleteUserbyId = async (req, res) => {
    try {
        const id=req.params.id
        await Users.deleteOne({_id:id})
        return res.status(200).json({message:"User Deleted Successfully"})
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error" })
    }
}
module.exports = {getAllUsers,getAllContacts,deleteUserbyId}