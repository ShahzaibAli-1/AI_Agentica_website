export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <section
        id="hero"
        className="min-h-[calc(100vh-5rem)] flex items-center py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-gray-900 dark:text-white">
              Engineering the Future of Enterprise Intelligence
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              From custom full-stack ecosystems to advanced AI automations, we
              deliver practical systems that scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full px-8 h-12 bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-black text-sm font-medium transition-colors"
              >
                Start Project
              </a>
              <a
                href="/blogs"
                className="inline-flex items-center justify-center rounded-full px-8 h-12 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 hover:border-gray-400 dark:bg-transparent dark:text-white dark:border-gray-700 dark:hover:border-gray-500 text-sm font-medium transition-colors"
              >
                Read the Blog
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Services
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "AI Strategy & Consulting",
              "Custom Agent Development",
              "Workflow Automation",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/40 p-6"
              >
                <p className="text-sm font-medium text-gray-900 dark:text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Work
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl">
            We build enterprise-grade internal copilots, retrieval platforms, and
            decision automation systems.
          </p>
        </div>
      </section>

      <section id="team" className="py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Team
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl">
            A small cross-functional team focused on practical AI product delivery.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Contact
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Email: ai.agentica@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}
