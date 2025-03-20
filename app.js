const nodemailer = require('nodemailer');
const Config = require('./config');
require('dotenv').config(); // Load environment variables
const fs = require('fs');

const html = fs.readFileSync('email-content.html', 'utf-8');
const config = new Config(process.env);

// Using SMTP transport protocol for sending emails and gmail credentials
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.userEmail,
        pass: config.appPassword
    }
});

// Using sendMail method that the transporter has for sending the email
transporter.sendMail({
    from: config.userEmail, // Email sender
    to: config.emailTo, // Email receiver
    subject: config.subject, // Subject of the email
    html: html
}, (err, info) => {
    if (err) {
        return console.log(err);
    }
    console.log('Message sent: %s', info.messageId);
});