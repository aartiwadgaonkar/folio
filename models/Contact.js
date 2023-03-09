const mongoose = require("mongoose");

module.exports = mongoose.model("contact", mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String
    }


}, { timestamps: true }))