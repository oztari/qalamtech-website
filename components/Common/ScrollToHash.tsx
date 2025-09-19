"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ScrollToHash = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const id = window.location.hash.replace("#", "");

      const scroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          // Retry next frame until element exists
          requestAnimationFrame(scroll);
        }
      };

      scroll();
    }
  }, [pathname]);

  return null;
};

export default ScrollToHash;
