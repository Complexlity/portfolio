// Gets the nodemailer function. See  https://nodemailer.com/usage/ for more information
import nodemailer from "nodemailer"

// Gets the email and password from the environmental variables
const email = process.env.EMAIL
const password = process.env.EMAIL_PASSWORD

// Creates the transport as specified by the nodemailer documentation. See /Pages/api/contact.ts for its usage
//Gmail service is used here. See https://nodemailer.com/usage/using-gmail/
export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password
    }
})


// Data used to save the email and password value. See /Pages/api/contact.ts for its usage
export const mailOPtions = {
    from: email,
    to: email,
}