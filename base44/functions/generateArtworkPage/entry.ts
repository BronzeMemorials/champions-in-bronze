import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

    const { proof_image_url, project_type, customer_name, organization } = await req.json();

    const result = await base44.integrations.Core.InvokeLLM({
      prompt: `You are an expert bronze recognition product copywriter and SEO specialist for Champions in Bronze, a premier bronze plaque and statue manufacturer in the USA.

Analyze this artwork proof image and generate rich, compelling landing page content AND full SEO metadata for a customer artwork approval page.

Context provided:
- Customer: ${customer_name || 'Unknown'}
- Organization: ${organization || 'Unknown'}
- Project type: ${project_type || 'Bronze Recognition Piece'}

Generate:
1. headline: A powerful, emotional headline (max 10 words) capturing the significance of this recognition piece
2. subheadline: A compelling subheadline (max 20 words) describing what makes this piece special
3. description: 2-3 sentences about the artwork, its craftsmanship, and lasting legacy
4. context: 2-3 sentences about the sport/occasion/athlete being recognized and why this moment deserves to be immortalized in bronze
5. sport: The sport or category visible (e.g. Football, Basketball, Baseball, Hall of Fame, Donor Recognition, Memorial, Wrestling, etc.)
6. accent_color: A hex color matching the sport/theme (football=#4a7c1e, basketball=#c85a00, baseball=#1a3a6b, hockey=#005a9e, soccer=#2d6a2d, hall of fame=#8B6914, etc.)
7. seo_title: SEO page title (max 60 chars) e.g. "John Smith Football Bronze Plaque — Champions in Bronze"
8. seo_description: Meta description (max 155 chars) summarizing what this custom bronze piece is and who it honors
9. og_description: Open Graph description for social sharing (1-2 sentences, engaging and emotional)
10. schema_name: The name of the person, team, or occasion being recognized (extract from image if possible)
11. schema_description: 1 sentence describing this specific bronze piece for structured data

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
          accent_color: { type: "string" },
          seo_title: { type: "string" },
          seo_description: { type: "string" },
          og_description: { type: "string" },
          schema_name: { type: "string" },
          schema_description: { type: "string" }
        }
      }
    });

    return Response.json({ success: true, ...result });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});