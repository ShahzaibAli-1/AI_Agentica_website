import { getAllPosts } from "@/lib/blogData";
import { slugify } from "@/lib/posts/slug";

export async function generateUniqueSlug(title: string, currentPostId?: string) {
  const base = slugify(title) || "post";
  const all = getAllPosts();
  let slug = base;
  let idx = 2;
  while (all.some((p) => p.slug === slug && p.slug !== currentPostId)) {
    slug = `${base}-${idx++}`;
  }
  return slug;
}

