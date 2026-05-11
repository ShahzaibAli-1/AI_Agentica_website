import * as React from "react";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { ClientPolyfills } from "@/components/site/ClientPolyfills";
import { SiteFooter } from "@/components/site/SiteFooter";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClientPolyfills />
      <SiteNavbar />
      <main className="pt-20">{children}</main>
      <SiteFooter />
    </>
  );
}

