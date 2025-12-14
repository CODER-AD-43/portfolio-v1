const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "msclipsytofficial@gmail.com",
        pass: "wtqmbiclrybzxheo"
      }
    });

    await transporter.sendMail({
      from: "msclipsytofficial@gmail.com",
      to: "msclipsytofficial@gmail.com",
      subject: `Portfolio Contact from ${name}`,
      text: message
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = router;
