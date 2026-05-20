import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

    const { proof_image_url, project_type, customer_name, organization } = await req.json();

    const result = await base44.integrations.Core.InvokeLLM({
      prompt: `You are an expert bronze recognition product copywriter for Champions in Bronze, a premier bronze plaque and statue manufacturer.

Analyze this artwork proof image and generate rich, compelling landing page content for a customer approval page.

Context provided:
- Customer: ${customer_name || 'Unknown'}
- Organization: ${organization || 'Unknown'}
- Project type: ${project_type || 'Bronze Recognition Piece'}

Based on the image, generate:
1. A powerful, emotional headline (max 10 words) that captures the significance of this recognition piece
2. A subheadline (max 20 words) describing what makes this piece special
3. A description (2-3 sentences) about the artwork, its craftsmanship, and lasting legacy
4. Context paragraph (2-3 sentences) about the sport/occasion/athlete being recognized and why this moment deserves to be immortalized in bronze
5. The sport or category visible (e.g. Football, Basketball, Baseball, Hall of Fame, Donor Recognition, Memorial, etc.)
6. A suggested accent color (hex code) that matches the sport or theme (e.g. football = #4a7c1e, basketball = #c85a00, baseball = #1a3a6b, etc.)

Return JSON only.`,
      file_urls: [proof_image_url],
      response_json_schema: {
        type: "object",
        properties: {
          headline: { type: "string" },
          subheadline: { type: "string" },
          description: { type: "string" },
          context: { type: "string" },
          sport: { type: "string" },
          accent_color: { type: "string" }
        }
      }
    });

    return Response.json({ success: true, ...result });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});