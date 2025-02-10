const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
//   try {
    // Set up transporter with Gmail SMTP and App Password
    let transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: "jainsaksham5209@gmail.com",
        pass: "tsrn jwaw oztb vhdh", // Use the 16-character App Password from Google
      },
    });

    let info = await transporter.sendMail({
      from: '"Saksham Jain 👻" <jainsaksham5209@gmail.com>', // Sender email
      to: "jainsaksham260@gmail.com", // Receiver email
      subject: "Hello from Nodemailer", // Subject
      text: "Hii  how are you....!!", // Plain text body
      html: "<b>Hii  how are you....!!</b>", // HTML body
    });

    console.log("Message sent: %s", info.messageId);
    // res.json({ message: "Email sent successfully!", messageId: info.messageId });
//   } catch (error) {
    // console.error("Error sending email:", error);
    // res.status(500).json({ error: "Failed to send email", details: error.message });
  }
// };

// module.exports = sendMail;
sendMail()