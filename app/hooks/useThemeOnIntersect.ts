import { useEffect, useRef, RefObject } from "react";

interface UseThemeOnIntersectOptions {
  threshold?: number;
  rootMargin?: string;
  sticky?: boolean;
}

export function useThemeOnIntersect(
  ref: RefObject<HTMLElement | null>,
  options: UseThemeOnIntersectOptions = {},
) {
  const { threshold = 0.5, rootMargin = "0px", sticky = false } = options;

  const sourceIdRef = useRef(
    `theme-source-${Math.random().toString(36).slice(2, 10)}`,
  );

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const root = document.documentElement;
    const sourceId = sourceIdRef.current;

    let isCurrentlyActive = false;
    let lastScrollY = window.scrollY;

    const updateTheme = (shouldBeDark: boolean) => {
      if (shouldBeDark) {
        if (!isCurrentlyActive) {
          root.classList.add("dark");
          root.dataset.darkSource = sourceId;
          isCurrentlyActive = true;
        }
      } else {
        if (isCurrentlyActive && root.dataset.darkSource === sourceId) {
          root.classList.remove("dark");
          delete root.dataset.darkSource;
          isCurrentlyActive = false;
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting =
          entry.isIntersecting && entry.intersectionRatio >= threshold;

        if (isIntersecting) {
          updateTheme(true);
        } else if (!sticky) {
          updateTheme(false);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    const handleScroll = () => {
      if (!sticky || !isCurrentlyActive) return;

      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY;

      if (isScrollingUp) {
        const rect = element.getBoundingClientRect();

        const isOutOfView =
          rect.bottom < -100 || rect.top > window.innerHeight + 100;

        if (isOutOfView) {
          updateTheme(false);
        }
      }

      lastScrollY = currentScrollY;
    };

    observer.observe(element);

    if (sticky) {
      window.addEventListener("scroll", handleScroll, {
        passive: true,
      });
    }

    return () => {
      observer.disconnect();

      if (sticky) {
        window.removeEventListener("scroll", handleScroll);
      }

      if (root.dataset.darkSource === sourceId) {
        root.classList.remove("dark");
        delete root.dataset.darkSource;
      }
    };
  }, [threshold, rootMargin, sticky, ref]);
}
