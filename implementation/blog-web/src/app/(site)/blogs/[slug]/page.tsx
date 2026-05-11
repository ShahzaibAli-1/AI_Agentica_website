import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlugData } from "@/lib/postStore";

export async function generateMetadata(
  ctx: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await ctx.params;
  const post = await getPostBySlugData(slug);
  if (!post) return { title: "Not found" };

  const title = post.title;
  const description = post.excerpt;
  const siteUrl = process.env.SITE_URL || "http://localhost:3000";
  const canonical = `${siteUrl}/blogs/${post.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "article",
      url: canonical,
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
    twitter: {
      card: post.coverImage ? "summary_large_image" : "summary",
      title,
      description,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage(ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  const post = await getPostBySlugData(slug);
  if (!post) return notFound();

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6 py-10 md:py-14">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blogs"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              ← All posts
            </Link>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              {post.publishedAt ? (
                <span>
                  {new Date(post.publishedAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                  })}
                </span>
              ) : null}
              {post.tags.length ? (
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 6).map((t) => (
                    <Link
                      key={t}
                      href={`/tags/${encodeURIComponent(t)}`}
                      className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 px-3 py-1 text-xs hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                    >
                      {t}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {post.coverImage ? (
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto mt-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt=""
              className="w-full rounded-2xl border border-gray-200 dark:border-gray-800 object-cover max-h-[480px]"
            />
          </div>
        </div>
      ) : null}

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed text-base whitespace-pre-line">
            {post.content}
          </div>
        </div>
      </section>
    </div>
  );
}

