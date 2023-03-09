const { contactController } = require("../controllers/contactController")

const router = require("express").Router()

router
    .post("/contact", contactController)

module.exports = router