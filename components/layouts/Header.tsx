"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contactUs", label: "Contact" },
  ];
  const menuVariants = {
    closed: { height: 0, opacity: 0, transition: { duration: 0.2 } },
    open: { height: "auto", opacity: 1, transition: { duration: 0.25 } },
  };
  const itemVariants = {
    closed: { opacity: 0, y: -6 },
    open: { opacity: 1, y: 0 },
  };
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const handleBreakpoint = () => setIsMobile(mediaQuery.matches);

    handleBreakpoint();
    mediaQuery.addEventListener("change", handleBreakpoint);

    return () => mediaQuery.removeEventListener("change", handleBreakpoint);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;
      const shouldShowHeader = currentScrollY <= 0 || isScrollingUp;

      setIsVisible(shouldShowHeader);
      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const keepHeaderVisible = isMobile || isMenuOpen;
  const headerVisible = keepHeaderVisible || isVisible;

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{
        y: headerVisible ? 0 : -110,
        opacity: headerVisible ? 1 : 0,
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`left-0 top-0 w-full z-50 p-4 sm:p-6 flex items-center text-lg text-(--header-foreground) uppercase transition-[box-shadow,backdrop-filter] duration-300 ease-out${" fixed"} ${
        headerVisible ? "pointer-events-auto" : "pointer-events-none"
      } bg-[rgb(var(--background-rgb)/0.9)] shadow-[0_1px_0_rgba(37,52,63,0.06)] backdrop-blur-sm`}
    >
      <div className="container mx-auto flex w-full flex-col lg:flex-row items-center justify-between h-full">
        <div className="flex w-full lg:w-auto items-center justify-between min-h-10">
          <h1 className="flex items-center text-sm sm:text-2xl font-bold leading-none text-(--header-foreground) font-zalando">
            <a href="/" className="inline-flex items-center leading-none">
              <p>
                <span className="text-[#ff6f00]">Solvein</span> Creative &
                Digital Agency
              </p>
            </a>
          </h1>
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-full border border-(--header-muted)/30 px-3 py-2 text-sm text-(--header-foreground) transition-colors hover:text-[#ff6f00]"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="block h-0.5 w-4 bg-current" />
            <span className="mt-1.5 block h-0.5 w-4 bg-current" />
          </button>
        </div>
        <nav className="w-full lg:w-auto">
          <ul className="hidden lg:flex lg:flex-row lg:flex-wrap gap-3 lg:gap-x-4 lg:gap-y-2 text-sm sm:text-base font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`transition-colors duration-300 ${
                    isActive(item.href)
                      ? "text-[#ff6f00]"
                      : "text-(--header-muted) hover:text-[#ff6f00]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.ul
                id="primary-navigation"
                className="lg:hidden flex w-full flex-col items-start gap-3 overflow-hidden text-left text-sm font-medium mt-4"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
              >
                {navItems.map((item) => (
                  <motion.li key={item.href} variants={itemVariants}>
                    <a
                      href={item.href}
                      className={`block transition-colors duration-300 ${
                        isActive(item.href)
                          ? "text-[#ff6f00]"
                          : "text-(--header-muted) hover:text-[#ff6f00]"
                      }`}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
}
