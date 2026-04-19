import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || '',
    pass: process.env.EMAIL_PASS || ''
  }
});

export default async function handler(req, res) {
  console.log('🚀 Function triggered');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { name = 'Anonymous', company, email, phone, project, message } = req.body || {};
  console.log('🚀Email details:', { name, company, email, phone, project, message },process.env.EMAIL_USER);

  const mailOptions = {
    from: process.env.FROM_EMAIL || process.env.EMAIL_USER || 'no-reply@example.com',
    to: process.env.TO_EMAIL || 'paras@kdkconstruction.ca',
    subject: `New Contact Inquiry from ${name}`,
    html: `
      <h3>New Contact Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Email:</strong> ${email || 'N/A'}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Project Type:</strong> ${project || 'N/A'}</p>
      <p><strong>Message:</strong> ${message || 'N/A'}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, error: error.toString() });
  }
}
