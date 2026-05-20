import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    const { token, action, change_notes } = await req.json();

    // Find proof by token using service role (public endpoint)
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

    // Notify the team
    const subject = action === 'approve'
      ? `✅ APPROVED: ${proof.customer_name} approved their artwork proof`
      : `🔄 CHANGES REQUESTED: ${proof.customer_name} requested changes`;

    const body = action === 'approve'
      ? `
<div style="font-family: Arial, sans-serif; max-width: 600px;">
  <h2 style="color: #16a34a;">✅ Artwork Approved!</h2>
  <p><strong>Customer:</strong> ${proof.customer_name}</p>
  <p><strong>Email:</strong> ${proof.customer_email}</p>
  <p><strong>Organization:</strong> ${proof.organization || 'N/A'}</p>
  <p><strong>Project:</strong> ${proof.project_type || 'N/A'}</p>
  <p style="color: #16a34a; font-weight: bold;">The customer has approved the artwork. You can move this into production.</p>
</div>`
      : `
<div style="font-family: Arial, sans-serif; max-width: 600px;">
  <h2 style="color: #d97706;">🔄 Changes Requested</h2>
  <p><strong>Customer:</strong> ${proof.customer_name}</p>
  <p><strong>Email:</strong> ${proof.customer_email}</p>
  <p><strong>Organization:</strong> ${proof.organization || 'N/A'}</p>
  <p><strong>Project:</strong> ${proof.project_type || 'N/A'}</p>
  <h3>Requested Changes:</h3>
  <div style="background: #fef3c7; border-left: 4px solid #d97706; padding: 16px; margin: 16px 0;">${change_notes || 'No details provided'}</div>
</div>`;

    await base44.integrations.Core.SendEmail({
      to: proof.created_by || 'proofs@championsinbronze.com',
      from_name: 'Champions in Bronze Proofs',
      subject,
      body
    });

    return Response.json({ success: true, status: newStatus });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});