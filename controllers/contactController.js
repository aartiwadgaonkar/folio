const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { sendEmail } = require("../utils/email")
const contact = require("./../models/Contact")
exports.contactController = async (req, res) => {
    try {
        const result = await contact.create({
            ...req.body
        })
        sendEmail({ sendTo: req.body.email, sub: req.body, msg: req.body.message })
        res.json({
            success: true,
            message: "contact send successfuly",
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "error" + error
        })
    }
}