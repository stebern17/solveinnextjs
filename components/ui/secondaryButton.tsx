"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface SecondaryButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export default function SecondaryButton({
  children,
  href = "#",
  className = "",
}: SecondaryButtonProps) {
  return (
    <Link
      href={href}
      className={`
        relative inline-flex items-center justify-center
        px-6 py-3 rounded-full border
        border-white
        text-white
        overflow-hidden group
        transition-transform duration-300
        hover:scale-105 active:scale-95
        ${className}
      `}
    >
      {/* Fill layer */}
      <span
        className="
          absolute inset-0
          bg-[#ff6f00]
          translate-y-full
          group-hover:translate-y-0
          transition-transform duration-500 ease-out
        "
      />

      {/* Text */}
      <span className="relative z-10 font-semibold transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
    </Link>
  );
}
