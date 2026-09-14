import { useEffect, useRef, useState } from 'react';

// Adds `is-visible` to an element the first time it scrolls into view.
// Falls back to permanently visible where IntersectionObserver is missing.
export default function useReveal(options) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px', ...options }
    );

    observer.observe(node);

    // Safety net: never leave content hidden because an observer stayed quiet.
    const fallback = window.setTimeout(() => setVisible(true), 4000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [options]);

  return [ref, visible];
}
