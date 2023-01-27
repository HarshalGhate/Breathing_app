const nodemailer = require('nodemailer')
require('dotenv').config()
const transpoter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
    tls: {
        rejectUnauthorized: false
    }
})

const sendMail = (mailOptions) => {
    transpoter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Email send: ', info.response);
        }
    });
}




module.exports = { transpoter: transpoter, sendMail: sendMail }