export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  tags: string[];
  coverImage?: string;
};

const POSTS: BlogPost[] = [
  {
    slug: "agentic-workflows-for-enterprise",
    title: "Designing Agentic Workflows for Enterprise Teams",
    excerpt:
      "A practical playbook to move from one-off demos to stable, repeatable agent workflows.",
    content:
      "Enterprise agent systems should be observable, testable, and simple to operate.\n\nStart small, keep clear success metrics, and scale only after reliability is proven.",
    publishedAt: "2026-05-01",
    tags: ["Agents", "Architecture"],
  },
  {
    slug: "rag-relevance-over-recall",
    title: "RAG Done Right: Relevance Over Recall",
    excerpt:
      "How to improve answer quality by tightening retrieval and context selection.",
    content:
      "Retrieval quality beats quantity.\n\nUse tighter chunks, strong reranking, and evaluate on real user prompts.",
    publishedAt: "2026-05-04",
    tags: ["RAG", "Search"],
  },
  {
    slug: "shipping-ai-to-production",
    title: "Shipping AI Features to Production Without the Drama",
    excerpt:
      "A lightweight checklist for reliability, safety, and fast iteration.",
    content:
      "Treat AI features like critical software.\n\nUse staged rollouts, telemetry, safe fallbacks, and clear ownership.",
    publishedAt: "2026-05-07",
    tags: ["Production", "MLOps"],
  },
];

export function getAllPosts() {
  return [...POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string) {
  return POSTS.find((p) => p.slug === slug) ?? null;
}

export function getPostsByTag(tag: string) {
  const normalized = tag.toLowerCase();
  return getAllPosts().filter((p) => p.tags.some((t) => t.toLowerCase() === normalized));
}

export function getAllTags() {
  return Array.from(new Set(POSTS.flatMap((p) => p.tags)));
}

