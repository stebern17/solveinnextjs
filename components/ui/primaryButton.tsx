"use client";

import IntroLoader from "@/components/layouts/introLoader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { useState } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  withIntroLoader?: boolean;
  loaderDurationMs?: number;
}

export default function PrimaryButton({
  children,
  href = "#",
  className = "",
  withIntroLoader = false,
  loaderDurationMs = 1800,
}: PrimaryButtonProps) {
  const router = useRouter();
  const [showLoader, setShowLoader] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!withIntroLoader) return;

    event.preventDefault();
    if (showLoader) return;

    setShowLoader(true);
    window.setTimeout(() => {
      router.push(href);
    }, loaderDurationMs);
  };

  return (
    <>
      {showLoader ? (
        <IntroLoader
          initialShow={false}
          visible={showLoader}
          autoHideAfterMs={null}
        />
      ) : null}

      <Link
        href={href}
        onClick={handleClick}
        className={`
          relative inline-flex items-center justify-center
          px-6 py-3 rounded-full border
          border-zinc-800 
          text-zinc-800 
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
    </>
  );
}
