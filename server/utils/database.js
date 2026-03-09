const mongoose = require("mongoose")
const URI = process.env.MONGODB_URI

const connectDb = async () => {
    try {
        await mongoose.connect(URI)
        console.log("Connected to DataBase")
    } catch (error) {
        console.log("DataBase connection failed")
        process.exit(0)
    }
}

module.exports = connectDb