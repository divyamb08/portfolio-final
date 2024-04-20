import nodemailer from 'nodemailer';

export async function post(req, res) {
  const { email, subject, message } = req.body;
  if (!email || !subject || !message) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email, // sender address
    to: process.env.YOUR_EMAIL_ADDRESS, // your email address
    subject: subject, // Subject from the form
    text: message, // message from the form
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully', result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
}