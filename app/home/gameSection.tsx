"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { useThemeOnIntersect } from "@/app/hooks/useThemeOnIntersect";

const EndlessRunner = dynamic(
  () => import("@/components/layouts/EndlessRunner"),
  { ssr: false },
);

export default function GameSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useThemeOnIntersect(sectionRef, { threshold: 0.5, sticky: false });

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden mt-10 sm:mt-0"
    >
      <div className="container flex flex-col items-center gap-8 sm:gap-10 py-8">
        <h3 className="max-w-4xl font-zalando text-lg sm:text-xl lg:text-3xl text-center uppercase font-extrabold leading-snug text-foreground transition-colors duration-500">
          WONDER HOW WOULD YOU{" "}
          <span className="text-[#ff6f00] font-bold">SOLVE</span> THE THINGS?{" "}
          <br />
          TRY TO BEAT THE GAME AND DECIDE IF YOU NEED PROFESSIONAL!
        </h3>

        <EndlessRunner />
      </div>
    </section>
  );
}
