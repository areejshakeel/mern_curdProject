require('dotenv').config()
const express = require("express")
const app = express()
const PORT = 5000
const authRoute = require('./Router/auth-route')
const contactRoute = require('./Router/contact-route')
const connectDb = require('./utils/database')


app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/auth", contactRoute)

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at ${PORT} port`)
    })
})


