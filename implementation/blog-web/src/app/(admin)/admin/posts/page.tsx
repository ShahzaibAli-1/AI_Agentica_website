export default function AdminPostsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Posts</h1>
      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
        Admin compatibility page restored. In lightweight mode, edit posts in
        <span className="font-mono"> src/lib/blogData.ts</span>.
      </p>
    </div>
  );
}

import Link from "next/link";

export default function AdminPostsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-10">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Posts
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Manage drafts, scheduled, and published posts.
          </p>
        </div>
        <Link
          href="/admin/posts/new"
          className="inline-flex items-center justify-center rounded-full px-6 h-10 bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-black text-sm font-medium transition-colors"
        >
          New post
        </Link>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/40 backdrop-blur-sm p-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Next up: we’ll hook this page to Mongo and add filters + pagination.
        </p>
      </div>
    </div>
  );
}

