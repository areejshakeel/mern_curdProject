require('dotenv').config()
const express = require("express")
const app = express()
const PORT = 5000
const router = require('./Router/auth-route')
const connectDb = require('./utils/database')


app.use(express.json())
app.use("/api/auth", router)

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at ${PORT} port`)
    })
})


