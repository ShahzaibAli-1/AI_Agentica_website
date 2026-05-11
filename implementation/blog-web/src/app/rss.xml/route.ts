import { getAllPostsData } from "@/lib/postStore";

function escapeXml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const siteUrl = process.env.SITE_URL || "http://localhost:3000";
  const posts = (await getAllPostsData()).slice(0, 50);

  const items = posts
    .map((p) => {
      const url = `${siteUrl}/blogs/${p.slug}`;
      const pubDate = p.publishedAt ? new Date(p.publishedAt) : new Date();
      return `
        <item>
          <title>${escapeXml(p.title)}</title>
          <link>${escapeXml(url)}</link>
          <guid>${escapeXml(url)}</guid>
          <pubDate>${pubDate.toUTCString()}</pubDate>
          <description>${escapeXml(p.excerpt)}</description>
        </item>
      `.trim();
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml("Agent Roller Blog")}</title>
    <link>${escapeXml(siteUrl)}</link>
    <description>${escapeXml(
      "Agent Roller — enterprise AI automation, agentic systems, and full-stack engineering."
    )}</description>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=600",
    },
  });
}

