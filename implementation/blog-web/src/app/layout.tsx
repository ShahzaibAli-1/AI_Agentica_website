import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { SiteChrome } from "@/components/site/SiteChrome";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s · Agent Roller",
    default: "Agent Roller",
  },
  description:
    "Agent Roller — enterprise AI automation, agentic systems, and full-stack engineering.",
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const earlyCompatScript = `
    (function () {
      try {
        if (!window.matchMedia) {
          window.matchMedia = function () {
            return {
              matches: false,
              media: "",
              onchange: null,
              addListener: function(){},
              removeListener: function(){},
              addEventListener: function(){},
              removeEventListener: function(){},
              dispatchEvent: function(){ return false; }
            };
          };
        }
        var mql = window.matchMedia("(prefers-color-scheme: dark)");
        var p = Object.getPrototypeOf(mql);
        if (p && !p.addListener && p.addEventListener) {
          p.addListener = function (cb) { this.addEventListener("change", cb); };
        }
        if (p && !p.removeListener && p.removeEventListener) {
          p.removeListener = function (cb) { this.removeEventListener("change", cb); };
        }
      } catch (e) {}
    })();
  `;

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: earlyCompatScript }} />
      </head>
      <body className="min-h-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
