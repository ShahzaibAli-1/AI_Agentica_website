import Link from "next/link";
import { getPostsByTagData } from "@/lib/postStore";

export default async function TagPage(ctx: { params: Promise<{ tag: string }> }) {
  const { tag } = await ctx.params;
  const decoded = decodeURIComponent(tag);

  const posts = (await getPostsByTagData(decoded)).slice(0, 24);

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="py-14 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
              Tag
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              {decoded}
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              Posts tagged with “{decoded}”.
            </p>
            <div className="mt-6">
              <Link
                href="/blogs"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                ← All posts
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          {posts.length === 0 ? (
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/40 backdrop-blur-sm p-10 text-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                No posts found
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Try another tag.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {posts.map((p) => (
                <article
                  key={p.slug}
                  className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/40 backdrop-blur-sm overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3 text-xs text-gray-500 dark:text-gray-400">
                      <span>
                        {p.publishedAt
                          ? new Date(p.publishedAt).toLocaleDateString(undefined, {
                              year: "numeric",
                              month: "short",
                              day: "2-digit",
                            })
                          : ""}
                      </span>
                    </div>
                    <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white leading-snug">
                      <Link
                        href={`/blogs/${p.slug}`}
                        className="hover:underline underline-offset-4"
                      >
                        {p.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                      {p.excerpt}
                    </p>
                    <div className="mt-5">
                      <Link
                        href={`/blogs/${p.slug}`}
                        className="text-sm font-medium text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

