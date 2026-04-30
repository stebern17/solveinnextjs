"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { HiChevronDown } from "react-icons/hi";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null,
  );
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    {
      href: "/portfolio",
      label: "Portfolio",
      submenu: [
        { href: "/portfolio#ourWorks", label: "Our Works" },
        { href: "/portfolio#caseStudies", label: "Case Studies" },
      ],
    },
    { href: "/about", label: "About" },
    { href: "/contactUs", label: "Contact" },
  ];

  const dropdownVariants = {
    closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  };

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
      } bg-[rgb(var(--background-rgb)/0.35)] shadow-[0_8px_30px_rgba(37,52,63,0.12)] backdrop-blur-lg border-b border-white/20`}
    >
      <div className="container mx-auto flex w-full flex-col lg:flex-row items-center justify-between h-full">
        <div className="flex w-full lg:w-auto items-center justify-between min-h-10">
          <h1 className="flex items-center text-sm sm:text-2xl font-bold leading-none text-(--header-foreground) font-zalando">
            <a href="/" className="inline-flex items-center leading-none">
              <p>
                <span className="text-[#ff6f00]">Solvein</span> Digital &
                Creative Agency
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
            {navItems.map((item: any) => (
              <li key={item.href} className="relative group">
                {item.submenu ? (
                  <button
                    type="button"
                    className={`transition-colors duration-300 flex items-center uppercase gap-1 ${
                      isActive(item.href)
                        ? "text-[#ff6f00]"
                        : "text-(--header-muted) hover:text-[#ff6f00]"
                    }`}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.label}
                    <HiChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                ) : (
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
                )}

                {/* Desktop Dropdown */}
                {item.submenu && (
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={dropdownVariants}
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl overflow-hidden z-50"
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <ul className="flex flex-col">
                          {item.submenu.map((subitem: any) => (
                            <li key={subitem.href}>
                              <a
                                href={subitem.href}
                                className="block px-4 py-3 text-gray-800 hover:bg-[#ff6f00] hover:text-white transition-colors duration-200 text-sm font-medium uppercase"
                              >
                                {subitem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.ul
                id="primary-navigation"
                className="lg:hidden flex w-full flex-col items-start  gap-3 overflow-hidden text-left text-sm font-medium mt-4"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
              >
                {navItems.map((item: any) => (
                  <motion.li
                    key={item.href}
                    variants={itemVariants}
                    className="w-full"
                  >
                    {item.submenu ? (
                      <div className="w-full">
                        <button
                          type="button"
                          className={`w-full text-left transition-color uppercase duration-300 flex items-center justify-between ${
                            isActive(item.href)
                              ? "text-[#ff6f00]"
                              : "text-(--header-muted) hover:text-[#ff6f00]"
                          }`}
                          onClick={() =>
                            setMobileOpenDropdown(
                              mobileOpenDropdown === item.label
                                ? null
                                : item.label,
                            )
                          }
                        >
                          {item.label}
                          <HiChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              mobileOpenDropdown === item.label
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>

                        {/* Mobile Dropdown */}
                        <AnimatePresence>
                          {mobileOpenDropdown === item.label && (
                            <motion.ul
                              initial="closed"
                              animate="open"
                              exit="closed"
                              variants={dropdownVariants}
                              className="mt-2 ml-4 flex flex-col gap-2 border-l-2 border-[#ff6f00] pl-3"
                            >
                              {item.submenu.map((subitem: any) => (
                                <li key={subitem.href}>
                                  <a
                                    href={subitem.href}
                                    className="block text-sm text-(--header-muted) hover:text-[#ff6f00] transition-colors duration-300 uppercase"
                                    onClick={() => {
                                      setMobileOpenDropdown(null);
                                      setIsMenuOpen(false);
                                    }}
                                  >
                                    {subitem.label}
                                  </a>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
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
                    )}
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
