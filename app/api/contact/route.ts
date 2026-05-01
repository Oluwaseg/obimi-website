import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// HTML escape function to prevent XSS
const escapeHtml = (str: string) =>
  str.replace(
    /[&<>"']/g,
    (tag) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[tag] || tag
  );

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    // Check if SMTP is configured
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = createTransporter();

      // Verify transporter connection
      await transporter.verify();

      // Email to site owner
      const mailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
        replyTo: email, // So you can reply directly to the submitter
        subject: `New Contact Form Submission from ${name || email}`,
        text: `
Name: ${name || 'Not provided'}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
        `.trim(),
        html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${escapeHtml(name || 'Not provided')}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
<p><strong>Message:</strong></p>
<p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        `.trim(),
      };

      await transporter.sendMail(mailOptions);
      console.log('Contact form email sent successfully');
    } else {
      // Fallback to console logging if SMTP not configured
      console.log('=== NEW CONTACT FORM SUBMISSION ===');
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Phone: ${phone || 'Not provided'}`);
      console.log(`Message: ${message}`);
      console.log('=====================================');
      console.log('Note: SMTP not configured, using console logging');
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message received! We will get back to you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
