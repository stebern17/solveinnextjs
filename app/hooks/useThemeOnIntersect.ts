import { useEffect, useRef, RefObject } from "react";

interface UseThemeOnIntersectOptions {
  threshold?: number;
  rootMargin?: string;
  sticky?: boolean;
  theme?: "dark" | "light";
}

export function useThemeOnIntersect(
  ref: RefObject<HTMLElement | null>,
  options: UseThemeOnIntersectOptions = {},
) {
  const {
    threshold = 0.5,
    rootMargin = "0px",
    sticky = false,
    theme = "dark",
  } = options;

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
          updateTheme(theme === "dark");
        } else if (!sticky || isCurrentlyActive) {
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

      lastScrollY = window.scrollY;
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
