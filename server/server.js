require('dotenv').config()
const express = require("express")
const app = express()
const PORT = 5000
const cors = require('cors')
const authRoute = require('./Router/auth-route')
const contactRoute = require('./Router/contact-route')
const connectDb = require('./utils/database')

var corsOptions = {
  origin: "http://localhost:5173",
  methods:"GET , POST , DELETE , PATCH , HEAD",
  credentials:true
}

app.use(cors(corsOptions))
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/form", contactRoute)

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at ${PORT} port`)
    })
})


