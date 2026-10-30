import { useEffect } from "react";

const DEFAULT_TITLE = "Shounak Paul — Generative AI Engineer";

function updateMeta(selector, content) {
  const element = document.head.querySelector(selector);
  if (element && content) {
    element.setAttribute("content", content);
  }
}

export function usePageMeta({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — Shounak Paul` : DEFAULT_TITLE;
    document.title = fullTitle;

    updateMeta('meta[name="description"]', description);
    updateMeta('meta[property="og:title"]', fullTitle);
    updateMeta('meta[property="og:description"]', description);
    updateMeta('meta[name="twitter:title"]', fullTitle);
    updateMeta('meta[name="twitter:description"]', description);
  }, [title, description]);
}
