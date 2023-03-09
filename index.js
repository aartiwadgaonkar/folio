const express = require("express")
const cors = require("cors")
const { connect } = require("./config/db")

require("dotenv").config({ path: "./.env" })

const app = express()
app.use(express.json())
app.use(express.static("public"))
app.use(cors())
connect()
app.use("/user", require("./routes/contactRoutes"))
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running`))