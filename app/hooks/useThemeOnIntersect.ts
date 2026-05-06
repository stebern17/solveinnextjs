import { useEffect, RefObject } from "react";

interface UseThemeOnIntersectOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Custom hook to apply dark theme when element is intersecting with 50% visibility
 * and remove it when element has 50% passed (scrolled out)
 */
export function useThemeOnIntersect(
  ref: RefObject<HTMLElement | null>,
  options: UseThemeOnIntersectOptions = {},
) {
  const { threshold = 0.5, rootMargin = "0px" } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const root = document.documentElement;
    const sourceId = `theme-source-${Math.random().toString(36).slice(2, 10)}`;

    // Use IntersectionObserver for detecting when element enters/leaves viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isActive =
            entry.isIntersecting && entry.intersectionRatio >= threshold;

          if (isActive) {
            root.classList.add("dark");
            root.dataset.darkSource = sourceId;
            return;
          }

          if (root.dataset.darkSource === sourceId) {
            root.classList.remove("dark");
            delete root.dataset.darkSource;
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (root.dataset.darkSource === sourceId) {
        root.classList.remove("dark");
        delete root.dataset.darkSource;
      }
    };
  }, [ref, threshold, rootMargin]);
}
