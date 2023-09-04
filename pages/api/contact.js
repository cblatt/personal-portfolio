import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
	const { name, email, message } = req.body;

	const transporter = nodemailer.createTransport({
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: process.env.DB_USER,
			pass: process.env.DB_PASS,
		},
		secure: true,
	});

	try {
		// Verify the transporter
		await new Promise((resolve, reject) => {
			transporter.verify(function (error, success) {
				if (error) {
					console.error("Error verifying transporter:", error);
					reject(error);
				} else {
					console.log("Server is ready to take our messages");
					resolve(success);
				}
			});
		});

		// Send the email
		const mail = await new Promise((resolve, reject) => {
			const mailOptions = {
				from: process.env.DB_USER,
				to: "camblatt@gmail.com",
				replyTo: email,
				subject: `Contact form submission from ${name}`,
				html: `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>
                `,
			};
			transporter.sendMail(mailOptions, (err, info) => {
				if (err) {
					console.error("Error sending email:", err);
					reject(err);
				} else {
					console.log("Email sent:", info.messageId);
					resolve(info);
				}
			});
		});

		return res.status(200).json({ message: "Email sent successfully" });
	} catch (error) {
		console.error("ERROR:", error);
		return res.status(500).json({ message: "Error sending email" });
	}
}
