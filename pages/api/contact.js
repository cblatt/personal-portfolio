import nodemailer from "nodemailer"

export default async function ContactAPI(req, res) {
    

    const { name, email, message } = req.body
    const data = {
        name,
        email,
        message,
    }

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.DB_USER,
            pass: process.env.DB_PASS,
        },
        secure: true,
    })

    try{
        const mail = await transporter.sendMail({
            from: process.env.DB_USER,
            to: "camblatt@gmail.com",
            replyTo: email,
            subject: `Contact form submission from ${name}`,
            html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            `,
        })

        console.log("Message sent: ", mail.messageId)

        return res.status(200).json({ message: "Email sent successfully" })
    }
    catch(error){
        console.log("ERROR" + error)
        return res.status(500).json({ message: "Error sending email" })
    }
}
