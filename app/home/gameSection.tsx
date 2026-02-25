"use client";

import dynamic from "next/dynamic";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

const EndlessRunner = dynamic(
  () => import("@/components/layouts/EndlessRunner"),
  { ssr: false },
);

export default function GameSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();

  useEffect(() => {
    const root = document.documentElement;

    const unsubscribe = scrollY.on("change", (latest) => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;

      // Jika sudah melewati top GameSection
      if (latest >= sectionTop) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    });

    return () => {
      unsubscribe();
      root.classList.remove("dark");
    };
  }, [scrollY]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="container flex flex-col items-center gap-10">
        <h3 className="font-zalando text-4xl text-center uppercase font-semibold text-foreground transition-colors duration-500">
          Lets see how good you are at{" "}
          <span className="text-[#ff6f00] font-bold">solving</span> problems,
          play our endless runner game and try to beat your high score!
        </h3>

        <EndlessRunner />
      </div>
    </section>
  );
}
