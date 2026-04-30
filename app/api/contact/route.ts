import { NextRequest, NextResponse } from 'next/server';

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

    // Log the contact message to server console
    // In production: add email notification or store in database
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone || 'Not provided'}`);
    console.log(`Message: ${message}`);
    console.log('=====================================');

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
