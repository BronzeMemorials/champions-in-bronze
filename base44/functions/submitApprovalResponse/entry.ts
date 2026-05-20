import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

const NOTIFY_EMAIL = 'art@championsinbronze.com';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    const { token, action, change_notes } = await req.json();

    const proofs = await base44.asServiceRole.entities.ArtworkProof.filter({ token });
    if (!proofs || proofs.length === 0) {
      return Response.json({ error: 'Proof not found' }, { status: 404 });
    }
    const proof = proofs[0];

    const newStatus = action === 'approve' ? 'approved' : 'changes_requested';

    await base44.asServiceRole.entities.ArtworkProof.update(proof.id, {
      status: newStatus,
      change_notes: change_notes || '',
      responded_at: new Date().toISOString()
    });

    const subject = action === 'approve'
      ? `✅ APPROVED: ${proof.customer_name} approved their artwork proof`
      : `🔄 CHANGES REQUESTED: ${proof.customer_name} requested changes`;

    const body = action === 'approve'
      ? `
<div style="font-family: Arial, sans-serif; max-width: 600px; color: #111;">
  <div style="background: #1a1a1a; padding: 24px; text-align: center;">
    <h1 style="color: #DAA520; font-size: 22px; margin: 0; letter-spacing: 2px;">CHAMPIONS IN BRONZE</h1>
  </div>
  <div style="padding: 32px;">
    <h2 style="color: #16a34a;">✅ Artwork Approved!</h2>
    <p><strong>Customer:</strong> ${proof.customer_name}</p>
    <p><strong>Email:</strong> <a href="mailto:${proof.customer_email}">${proof.customer_email}</a></p>
    <p><strong>Organization:</strong> ${proof.organization || 'N/A'}</p>
    <p><strong>Project:</strong> ${proof.project_type || 'N/A'}</p>
    <p><strong>Sport:</strong> ${proof.ai_sport || 'N/A'}</p>
    ${proof.proof_image_url ? `<p><strong>Proof Image:</strong> <a href="${proof.proof_image_url}">View Proof</a></p>` : ''}
    <div style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 16px; margin: 24px 0; font-size: 16px; color: #15803d; font-weight: bold;">
      The customer has approved the artwork. Ready to move into production.
    </div>
    <p style="color: #666; font-size: 13px; border-top: 1px solid #eee; padding-top: 16px; margin-top: 24px;">
      Champions in Bronze · art@championsinbronze.com · 772-309-0412
    </p>
  </div>
</div>`
      : `
<div style="font-family: Arial, sans-serif; max-width: 600px; color: #111;">
  <div style="background: #1a1a1a; padding: 24px; text-align: center;">
    <h1 style="color: #DAA520; font-size: 22px; margin: 0; letter-spacing: 2px;">CHAMPIONS IN BRONZE</h1>
  </div>
  <div style="padding: 32px;">
    <h2 style="color: #d97706;">🔄 Changes Requested</h2>
    <p><strong>Customer:</strong> ${proof.customer_name}</p>
    <p><strong>Email:</strong> <a href="mailto:${proof.customer_email}">${proof.customer_email}</a></p>
    <p><strong>Organization:</strong> ${proof.organization || 'N/A'}</p>
    <p><strong>Project:</strong> ${proof.project_type || 'N/A'}</p>
    <p><strong>Sport:</strong> ${proof.ai_sport || 'N/A'}</p>
    ${proof.proof_image_url ? `<p><strong>Proof Image:</strong> <a href="${proof.proof_image_url}">View Proof</a></p>` : ''}
    <h3 style="margin-top: 24px;">Requested Changes:</h3>
    <div style="background: #fef3c7; border-left: 4px solid #d97706; padding: 16px; margin: 8px 0; font-size: 15px; white-space: pre-wrap;">${change_notes || 'No details provided'}</div>
    <p style="color: #666; font-size: 13px; border-top: 1px solid #eee; padding-top: 16px; margin-top: 24px;">
      Champions in Bronze · art@championsinbronze.com · 772-309-0412
    </p>
  </div>
</div>`;

    await base44.integrations.Core.SendEmail({
      to: NOTIFY_EMAIL,
      from_name: 'Champions in Bronze Proofs',
      subject,
      body
    });

    return Response.json({ success: true, status: newStatus });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});