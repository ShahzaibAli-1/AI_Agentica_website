import { AdminLoginForm } from "@/components/admin/AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="max-w-md rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Admin Login</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Compatibility page restored.
        </p>
        <div className="mt-6">
          <AdminLoginForm />
        </div>
      </div>
    </div>
  );
}

import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { Suspense } from "react";

export default function AdminLoginPage() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-16 bg-white dark:bg-gray-900">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/40 backdrop-blur-sm p-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Admin Login
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Sign in to publish and manage blog posts.
        </p>
        <div className="mt-6">
          <Suspense fallback={null}>
            <AdminLoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

