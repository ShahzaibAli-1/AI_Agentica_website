"use client";

import * as React from "react";

export function ClientPolyfills() {
  React.useEffect(() => {
    // Some environments removed MediaQueryList.addListener/removeListener.
    // Certain libs still call them; provide a compat shim.
    try {
      const mql = window.matchMedia?.("(prefers-color-scheme: dark)");
      if (!mql) return;

      const proto = Object.getPrototypeOf(mql) as {
        addListener?: (cb: (e: MediaQueryListEvent) => void) => void;
        removeListener?: (cb: (e: MediaQueryListEvent) => void) => void;
        addEventListener?: (type: "change", cb: (e: MediaQueryListEvent) => void) => void;
        removeEventListener?: (type: "change", cb: (e: MediaQueryListEvent) => void) => void;
      };

      if (!proto.addListener && proto.addEventListener) {
        proto.addListener = function (cb) {
          this.addEventListener?.("change", cb);
        };
      }
      if (!proto.removeListener && proto.removeEventListener) {
        proto.removeListener = function (cb) {
          this.removeEventListener?.("change", cb);
        };
      }
    } catch {
      // ignore
    }
  }, []);

  return null;
}

