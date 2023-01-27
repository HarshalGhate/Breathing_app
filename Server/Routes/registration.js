const express = require('express');
const dbonn = require('../Config/config');
require('dotenv').config()
const Router = express.Router();
const sendmail = require('../Services/email_sending')
const jwt=require('jsonwebtoken')

Router.post('/register', (req, res) => {
    const { userName, email, password } = req.body;
    console.log("----------", userName, email, password);
    values = [userName, email, password]
    var sql = `select userName,email,password from Registration where email='${email}'`;
    dbonn.query(sql, values, (err, result) => {
        if (!err) {
            if (result.length > 0) {
                return res.status(200).json({ "message": "Email already exist" });
            }
            else if (result.length == 0) {
                var sql = `Insert into Registration(userName,email,password,status)values(?,?,?,'Inactive')`
                dbonn.query(sql, values, (err, result) => {
                    if (!err) {

                        const payload={
                            email:email
                        }  
                        const ACCESS_Token= jwt.sign(payload,process.env.ACCESS_TOKEN,{expiresIn:'30min'});
                        let mailoption = ForRegistration(email,userName,ACCESS_Token)
                        sendmail.sendMail(mailoption)
                        return res.status(201).json({ message: "Verification link send successfully to your email." })
                    }
                    else {
                        return res.status(500).json(err)
                    }
                })
            }
        }
        else {
            return res.status(500).json(err)
        }
    })

})

function ForRegistration(email, uname ,ACCESS_Token) {
    var mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Verification link for Breathing App",
        html: `<!DOCTYPE html>

        <html lang="en">
        
        <head>
        
            <title>Breathing App</title>
            <style>
                .verifybtn {
                    width: 50%;
                    margin: auto;
                    text-align: center;
                }
        
                p {
                    font-size: 16px;
                }
        
                .verifybtn a button {
                    background:#fd7e14;
                    border:none;
                    color: white;
                    text-decoration: none;
                    padding: 15px 17px;
                    border-radius: 50px;
                    font-size: 16px;
                    text-transform: uppercase;
                    cursor: pointer;
                }
                button{
                    cursor: pointer;
                }
            </style>
        </head>
        
        <body>
        <p><b>Hello ${uname},</b></p>
        <p>Thanks for creating account for <b>Breathing App</b>
            account! Before you get started, you need you to verify Email by "Click Here To Verify" below.</p><br>
        <div class="verifybtn">
            <a href=${process.env.Frontend_URL}/${ACCESS_Token}><button>Click here to Verify</button></a>
        </div>
    </body>
        
        </html>`
    };
    return mailOptions;
}

module.exports = Router