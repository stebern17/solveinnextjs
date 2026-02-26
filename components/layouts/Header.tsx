"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const [showBackground, setShowBackground] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;
      const shouldShowBackground = currentScrollY > 50;
      const shouldShowHeader = currentScrollY <= 0 || isScrollingUp;

      setShowBackground(shouldShowBackground);
      setIsVisible(shouldShowHeader);
      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -110,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`left-0 top-0 w-full z-50 h-[10vh] p-6 flex items-center text-lg text-(--header-foreground) uppercase transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-out${" fixed"}${
        showBackground
          ? " bg-[rgb(var(--background-rgb)/0.92)] shadow-[0_1px_0_rgba(37,52,63,0.06)] backdrop-blur-sm"
          : " bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-(--header-foreground) font-zalando">
          <a href="/">
            <span className="text-[#ff6f00]">Solvein</span> Digital Agency
          </a>
        </h1>
        <nav>
          <ul className="flex space-x-6 mt-2 text-base font-medium">
            <li>
              <a
                href="/"
                className={`transition-colors duration-300 ${
                  isActive("/")
                    ? "text-[#ff6f00]"
                    : "text-(--header-muted) hover:text-[#ff6f00]"
                }`}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/services"
                className={`transition-colors duration-300 ${
                  isActive("/services")
                    ? "text-[#ff6f00]"
                    : "text-(--header-muted) hover:text-[#ff6f00]"
                }`}
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="/about"
                className={`transition-colors duration-300 ${
                  isActive("/about")
                    ? "text-[#ff6f00]"
                    : "text-(--header-muted) hover:text-[#ff6f00]"
                }`}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/contactUs"
                className={`transition-colors duration-300 ${
                  isActive("/contact")
                    ? "text-[#ff6f00]"
                    : "text-(--header-muted) hover:text-[#ff6f00]"
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
