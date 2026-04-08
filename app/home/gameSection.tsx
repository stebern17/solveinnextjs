"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const EndlessRunner = dynamic(
  () => import("@/components/layouts/EndlessRunner"),
  { ssr: false },
);

export default function GameSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const section = sectionRef.current;

    if (!section) return;

    const updateTheme = () => {
      const rect = section.getBoundingClientRect();
      const hasEntered = rect.top <= window.innerHeight * 0.5;

      if (hasEntered) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    updateTheme();
    window.addEventListener("scroll", updateTheme, { passive: true });
    window.addEventListener("resize", updateTheme);

    return () => {
      window.removeEventListener("scroll", updateTheme);
      window.removeEventListener("resize", updateTheme);
      root.classList.remove("dark");
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full sm:min-h-screen flex items-center justify-center overflow-hidden mt-10 sm:mt-0"
    >
      <div className="container flex flex-col items-center gap-8 sm:gap-10 py-8">
        <h3 className="max-w-4xl font-zalando text-xl sm:text-3xl lg:text-4xl text-start sm:text-center uppercase font-semibold leading-snug text-foreground transition-colors duration-500">
          Lets see how good you are at{" "}
          <span className="text-[#ff6f00] font-bold">solving</span> problems,
          play our endless runner game and try to beat your high score!
        </h3>

        <EndlessRunner />
      </div>
    </section>
  );
}
