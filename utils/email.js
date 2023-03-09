const nodemailer = require("nodemailer")
exports.sendEmail = ({ sendTo, sub, msg, sendMe }) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "aartiwadgaonkar256@gmail.com",
            pass: "wpsjuvykbahlxfty"
        }
    })
    transporter.sendMail({
        to: "aartiwadgaonkar256@gmail.com",
        from: sendTo,
        subject: sub,
        text: msg
    }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("email send successfully");
        }
    })
}