import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-16 text-gray-600">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="mb-4 inline-block">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Agent Roller</h2>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs leading-relaxed">
              Pioneering intelligent AI agents and automation solutions for the
              enterprise of tomorrow.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#services" className="hover:text-gray-900 dark:hover:text-white">AI Strategy</a></li>
              <li><a href="/#services" className="hover:text-gray-900 dark:hover:text-white">Custom Agents</a></li>
              <li><a href="/#services" className="hover:text-gray-900 dark:hover:text-white">Workflow Automation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#team" className="hover:text-gray-900 dark:hover:text-white">About Us</a></li>
              <li><a href="/#work" className="hover:text-gray-900 dark:hover:text-white">Our Work</a></li>
              <li><a href="/#contact" className="hover:text-gray-900 dark:hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <a
              href="mailto:ai.agentica@gmail.com"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              ai.agentica@gmail.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Agent Roller. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

