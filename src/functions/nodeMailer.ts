import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "mailermail66@gmail.com",
        pass: "ksjc cbtx rsef bdtv"
    }
});

export async function sendMail(email: string, subject: string, html: string, callback:any) {
    const mailOptions = {
        from: "mailermail66@gmail.com",
        to: email,
        subject: subject,
        html: html
    }

    transporter.sendMail(mailOptions, function (error: any, info: any) {
        if (error) {
            console.error(error);
            callback(error);
        } else {
            console.log("Email has been sent to user's email");
            callback(null, info);
        }
    });

}

