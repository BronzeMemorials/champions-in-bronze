import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

    const { proof_id, customer_email, customer_name, token, site_url } = await req.json();

    const approvalUrl = `${site_url || 'https://championsinbronze.com'}/approval/${token}`;

    await base44.integrations.Core.SendEmail({
      to: customer_email,
      from_name: 'Champions in Bronze',
      subject: `Your Artwork Proof is Ready for Approval — Champions in Bronze`,
      body: `
<div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #fff; color: #111;">
  <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 40px 32px; text-align: center;">
    <h1 style="color: #DAA520; font-size: 28px; margin: 0; letter-spacing: 2px;">CHAMPIONS IN BRONZE</h1>
    <p style="color: #ccc; margin: 8px 0 0; font-size: 14px; letter-spacing: 1px;">YOUR ARTWORK PROOF IS READY</p>
  </div>
  <div style="padding: 40px 32px;">
    <p style="font-size: 18px; color: #111;">Dear ${customer_name},</p>
    <p style="color: #333; line-height: 1.7;">Your custom artwork proof has been prepared by our design team and is ready for your review. Please click the button below to view your proof and either approve it or submit any requested changes.</p>
    <div style="text-align: center; margin: 40px 0;">
      <a href="${approvalUrl}" style="background: linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%); color: #000; font-weight: bold; padding: 18px 40px; text-decoration: none; font-size: 16px; letter-spacing: 1px; display: inline-block;">VIEW & APPROVE YOUR ARTWORK</a>
    </div>
    <p style="color: #666; font-size: 14px;">Or copy and paste this link into your browser:<br><a href="${approvalUrl}" style="color: #B8860B;">${approvalUrl}</a></p>
    <p style="color: #333; line-height: 1.7; margin-top: 32px;">Once approved, your piece moves immediately into production. If you have any changes, simply note them on the approval page and our team will revise and send a new proof promptly.</p>
    <p style="color: #666; font-size: 14px; margin-top: 40px; border-top: 1px solid #eee; padding-top: 24px;">Champions in Bronze · Museum-Quality Bronze Since 1974 · Made in the USA</p>
  </div>
</div>
      `
    });

    await base44.asServiceRole.entities.ArtworkProof.update(proof_id, {
      status: 'sent',
      sent_at: new Date().toISOString()
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});