import { useEffect } from "react";

const SITE_NAME = "Learn Code Basics";

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const fullTitle =
      title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }

    return () => {
      document.title = `${SITE_NAME} - Understand What Developers Do`;
    };
  }, [title, description]);
}
