import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function RouteEffects() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(
        decodeURIComponent(hash.slice(1))
      );

      if (target) {
        window.requestAnimationFrame(() => {
          target.scrollIntoView({ block: "start" });
        });
      }
    } else {
      window.scrollTo({ top: 0, left: 0 });
    }

    if (previousPath.current === pathname) {
      return;
    }

    previousPath.current = pathname;

    const main = document.getElementById("main-content");
    if (main) {
      window.requestAnimationFrame(() => main.focus({ preventScroll: true }));
    }
  }, [pathname, hash]);

  return null;
}
