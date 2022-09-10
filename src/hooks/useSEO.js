import { useEffect, useRef } from "react";

export function useSEO({ title, description}) {
  const defaultTitle = useRef(document.title);
  const defaultDescription = useRef(document
      .querySelector('meta[name="description"]')
      .getAttribute("content"));

  useEffect(() => {
    const prevTitle = defaultTitle.current;
    if (title) document.title = title + " | Giffy";

    return () => (document.title = prevTitle);
  }, [title]);

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]')
    const prevDescription = defaultDescription.current;
    if (description) metaDescription.content = description;
    return () => metaDescription.setAttribute('content', prevDescription);
  }, [description]);
}
