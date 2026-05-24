import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      // Fail silently in dev if key not configured
      console.warn('[waitlist] RESEND_API_KEY not set — skipping email notification.');
      return NextResponse.json({ ok: true });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Ninelm Waitlist <waitlist@ninelm.com>',
        to: ['hello@ninelm.com'],
        subject: '🎉 New waitlist signup',
        text: `New waitlist signup: ${email}`,
        html: `
          <div style="font-family:sans-serif;max-width:480px;margin:0 auto;">
            <h2 style="color:#1B6FEB;">New waitlist signup</h2>
            <p style="font-size:16px;color:#333;">
              <strong>${email}</strong> just joined the Ninelm waitlist.
            </p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('[waitlist] Resend error:', err);
      return NextResponse.json({ error: 'Failed to send notification.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[waitlist] Unexpected error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
