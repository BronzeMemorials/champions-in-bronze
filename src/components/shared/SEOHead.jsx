import { useEffect } from "react";

export default function SEOHead({ title, description, canonical, ogImage }) {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    if (description) {
      setMeta("description", description);
      setMeta("og:description", description, "property");
    }
    if (title) {
      setMeta("og:title", title, "property");
    }
    if (ogImage) {
      setMeta("og:image", ogImage, "property");
    }
    setMeta("og:type", "website", "property");

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", `https://championsinbronze.com${canonical}`);
    }
  }, [title, description, canonical, ogImage]);

  return null;
}