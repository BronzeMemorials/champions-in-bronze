import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, email, phone, organization, description, project_type, who_for, budget_range, timeline, file_urls } = await req.json();

    const html = `
      <h2 style="font-family:Arial,sans-serif;">New Quote Request — Champions in Bronze</h2>
      <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;">
        ${row('Name', name)}
        ${row('Email', email)}
        ${row('Phone', phone)}
        ${row('Organization', organization)}
        ${row('Who For', who_for)}
        ${row('Project Type', project_type)}
        ${row('Budget Range', budget_range)}
        ${row('Timeline', timeline)}
        ${row('Description', description)}
        ${row('Attachments', file_urls && file_urls.length > 0 ? file_urls.map((u, i) => `<a href="${u}">File ${i + 1}</a>`).join(', ') : 'None')}
      </table>
    `;

    const { accessToken } = await base44.asServiceRole.connectors.getConnection('gmail');

    const subject = `New Quote Request from ${name}`;
    const to = 'info@championsinbronze.com';

    const messageParts = [
      `To: ${to}`,
      `Reply-To: ${name} <${email}>`,
      `Subject: ${subject}`,
      `MIME-Version: 1.0`,
      `Content-Type: text/html; charset=UTF-8`,
      ``,
      html,
    ];
    const rawMessage = messageParts.join('\r\n');
    const encodedMessage = btoa(unescape(encodeURIComponent(rawMessage)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ raw: encodedMessage }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Gmail API error: ${res.status} ${text}`);
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});

function row(label, value) {
  return `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;width:160px;">${label}</td><td style="padding:8px;border:1px solid #ddd;">${value || '—'}</td></tr>`;
}