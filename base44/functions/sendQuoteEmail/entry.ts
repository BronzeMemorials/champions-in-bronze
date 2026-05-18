import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, email, phone, organization, description, project_type, who_for, budget_range, timeline, file_urls } = await req.json();

    const { accessToken } = await base44.asServiceRole.connectors.getConnection('outlook');

    const bodyLines = [
      `<h2>New Quote Request</h2>`,
      `<table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;">`,
      row('Name', name),
      row('Email', email),
      row('Phone', phone || '—'),
      row('Organization', organization || '—'),
      row('Who For', who_for || '—'),
      row('Project Type', project_type || '—'),
      row('Budget Range', budget_range || '—'),
      row('Timeline', timeline || '—'),
      row('Description', description || '—'),
      file_urls && file_urls.length > 0
        ? row('Attachments', file_urls.map((u, i) => `<a href="${u}">File ${i + 1}</a>`).join(', '))
        : row('Attachments', 'None'),
      `</table>`,
    ].join('');

    const message = {
      message: {
        subject: `New Quote Request from ${name}`,
        body: {
          contentType: 'HTML',
          content: bodyLines,
        },
        toRecipients: [
          { emailAddress: { address: 'quotes@bronzememorials.net' } },
        ],
      },
      saveToSentItems: true,
    };

    const res = await fetch('https://graph.microsoft.com/v1.0/me/sendMail', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Graph API error: ${res.status} ${text}`);
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});

function row(label, value) {
  return `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;width:160px;">${label}</td><td style="padding:8px;border:1px solid #ddd;">${value || '—'}</td></tr>`;
}