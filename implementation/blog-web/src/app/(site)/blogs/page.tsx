import Link from "next/link";
import { getAllPostsData } from "@/lib/postStore";

export default async function BlogsPage() {
  const posts = await getAllPostsData();
  const tags = Array.from(new Set(posts.flatMap((p) => p.tags))).slice(0, 16);

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="py-16 md:py-20 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
              Blogs
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              Writing on agentic systems and enterprise AI
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              Playbooks, patterns, and lessons learned from shipping production
              automation.
            </p>
          </div>

          {tags.length ? (
            <div className="mt-8 flex flex-wrap gap-2">
              {tags.map((t) => (
                <Link
                  key={t}
                  href={`/tags/${encodeURIComponent(t)}`}
                  className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/40 px-4 py-1.5 text-sm text-gray-700 dark:text-gray-200 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                >
                  {t}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {posts.length === 0 ? (
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/40 backdrop-blur-sm p-10 text-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                No posts yet
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Add posts in <span className="font-mono">src/lib/blogData.ts</span>.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {posts.map((p) => (
                <article
                  key={p.slug}
                  className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/40 backdrop-blur-sm overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                >
                  {p.coverImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.coverImage}
                      alt=""
                      className="h-44 w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-44 w-full bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900" />
                  )}

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3 text-xs text-gray-500 dark:text-gray-400">
                      <span>
                        {new Date(p.publishedAt).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        })}
                      </span>
                      {p.tags.length ? (
                        <span className="truncate">{p.tags[0]}</span>
                      ) : null}
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

