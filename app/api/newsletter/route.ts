import mailchimp from '@mailchimp/mailchimp_marketing';
import { NextRequest, NextResponse } from 'next/server';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const listId = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!listId) {
      console.error('Mailchimp audience ID missing');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Add subscriber to Mailchimp list
    await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: 'subscribed',
    });

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed to our newsletter!' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Mailchimp error:', error);

    // Handle case where subscriber already exists
    if (error && typeof error === 'object' && 'response' in error) {
      const mailchimpError = error as {
        response?: { body?: { title?: string } };
      };
      if (mailchimpError.response?.body?.title === 'Member Exists') {
        return NextResponse.json(
          { success: true, message: 'You are already subscribed!' },
          { status: 200 }
        );
      }
    }

    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
