import { dbConnect } from "@/lib/db";
import { Post } from "@/models/Post";
import {
  getAllPosts as getAllLocalPosts,
  getPostBySlug as getLocalPostBySlug,
  getPostsByTag as getLocalPostsByTag,
} from "@/lib/blogData";

export type SimplePost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  tags: string[];
  coverImage?: string;
};

function normalizePost(input: {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: Date | string;
  tags?: string[];
  coverImage?: string;
}): SimplePost {
  return {
    slug: input.slug,
    title: input.title,
    excerpt: input.excerpt,
    content: input.content,
    publishedAt:
      input.publishedAt instanceof Date
        ? input.publishedAt.toISOString()
        : new Date(input.publishedAt).toISOString(),
    tags: Array.isArray(input.tags) ? input.tags : [],
    coverImage: input.coverImage || "",
  };
}

export async function getAllPostsData() {
  try {
    await dbConnect();
    const posts = await Post.find({ status: "published" })
      .sort({ publishedAt: -1 })
      .lean();
    if (posts.length > 0) {
      return posts.map((p) =>
        normalizePost({
          slug: p.slug,
          title: p.title,
          excerpt: p.excerpt,
          content: p.content,
          publishedAt: p.publishedAt,
          tags: p.tags,
          coverImage: p.coverImage,
        })
      );
    }
  } catch {
    // fallback below
  }
  return getAllLocalPosts().map((p) => normalizePost(p));
}

export async function getPostBySlugData(slug: string) {
  try {
    await dbConnect();
    const p = await Post.findOne({ slug, status: "published" }).lean();
    if (p) {
      return normalizePost({
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        content: p.content,
        publishedAt: p.publishedAt,
        tags: p.tags,
        coverImage: p.coverImage,
      });
    }
  } catch {
    // fallback below
  }
  const local = getLocalPostBySlug(slug);
  return local ? normalizePost(local) : null;
}

export async function getPostsByTagData(tag: string) {
  const normalized = tag.toLowerCase();
  try {
    await dbConnect();
    const posts = await Post.find({ status: "published", tags: tag })
      .sort({ publishedAt: -1 })
      .lean();
    if (posts.length > 0) {
      return posts.map((p) =>
        normalizePost({
          slug: p.slug,
          title: p.title,
          excerpt: p.excerpt,
          content: p.content,
          publishedAt: p.publishedAt,
          tags: p.tags,
          coverImage: p.coverImage,
        })
      );
    }
  } catch {
    // fallback below
  }
  return getLocalPostsByTag(normalized).map((p) => normalizePost(p));
}

