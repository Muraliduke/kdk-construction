const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

// Note: Use your actual Gmail and corresponding App Password below
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '', // Replace with your gmail
        pass: ''     // Replace with your google app password
    }
});

exports.sendContactEmail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        if (req.method !== 'POST') {
            return res.status(405).send('Method Not Allowed');
        }

        const { name, company, email, phone, project, message } = req.body;

        const mailOptions = {
            from: 'your-email@gmail.com', // Replace with your gmail
            to: 'paras@kdkconstruction.ca',
            subject: `New Contact Inquiry from ${name}`,
            html: `
                <h3>New Contact Request</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Company:</strong> ${company || 'N/A'}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Project Type:</strong> ${project || 'N/A'}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        };

        return transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).send({ success: false, error: error.toString() });
            }
            return res.status(200).send({ success: true, message: 'Email sent successfully!' });
        });
    });
});
