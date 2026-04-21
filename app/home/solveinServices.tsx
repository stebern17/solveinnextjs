"use client";

import { useEffect, useRef } from "react";

export default function SolveinServices() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const wRef = useRef<HTMLSpanElement | null>(null);
  const services = [
    {
      title: "Brand Strategy",
      description:
        "Crafting compelling brand narratives that resonate with your audience and drive engagement.",
    },
    {
      title: "Digital Marketing",
      description:
        "Creating data-driven campaigns that amplify your brand’s reach and impact across digital channels.",
    },
    {
      title: "Creative Design",
      description:
        "Designing visually stunning and cohesive brand identities that captivate and inspire.",
    },
    {
      title: "Web Development",
      description:
        "Building seamless, user-friendly websites that embody your brand’s essence and enhance user experience.",
    },
  ];
  useEffect(() => {
    const section = sectionRef.current;
    const cursor = cursorRef.current;
    const heading = headingRef.current;
    const w = wRef.current;
    if (!section || !cursor || !w) return;
    const cursorSize = 48;

    const setInitialPosition = () => {
      if (!section || !cursor || !w) return;

      const sectionRect = section.getBoundingClientRect();
      const wRect = w.getBoundingClientRect();

      const x = wRect.left - sectionRect.left - cursorSize / 2;

      const y = wRect.top - sectionRect.top + wRect.height / 2 - cursorSize / 2;

      cursor.style.opacity = "1";
      cursor.style.transition = "transform 500ms ease, opacity 300ms ease";
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const handleMove = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = event.clientX - rect.left - cursorSize / 2;
      const y = event.clientY - rect.top - cursorSize / 2;

      cursor.style.opacity = "1";
      cursor.style.transition = "transform 80ms linear, opacity 150ms ease";
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const handleLeave = () => {
      setInitialPosition();
    };

    const handleResize = () => {
      setInitialPosition();
    };

    const handleScroll = () => {
      setInitialPosition();
    };

    setInitialPosition();

    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseleave", handleLeave);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container py-10 sm:py-14 relative cursor-none dark:text-white"
    >
      <div
        ref={cursorRef}
        className="hidden md:block pointer-events-none absolute left-0 top-0 z-20 h-12 w-12 rounded-full border border-[#ff6f00]/50 bg-[#ff6f00]/10 duration-500 ease-out"
      />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between md:gap-3 mb-4 md:mb-2">
        <h1
          ref={headingRef}
          className="text-2xl sm:text-3xl font-bold font-zalando uppercase md:mb-2 z-25 relative text-gray-800 transition-colors duration-500 mt-6 "
        >
          <span ref={wRef}>W</span>hat Can We Do
        </h1>
        <a
          href="/services"
          className="text-[#ff6f00] hover:text-[#ff6f00]/60 transition-colors duration-300 cursor-none"
        >
          Learn More
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative flex flex-col gap-4 p-6 border border-gray-200 rounded-xl backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-300 h-full overflow-hidden"
          >
            <div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,111,0,0.25),rgba(255,111,0,0))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-[0.2em] text-gray-500 transition-colors duration-500">
                0{index + 1}
              </span>
              <span className="h-px w-12 bg-gray-300 transition-all duration-300 group-hover:w-20 group-hover:bg-[#ff6f00]" />
            </div>
            <h2 className="text-xl font-bold font-zalando uppercase text-gray-800 transition-colors duration-500">
              {service.title}
            </h2>

            <p className="text-gray-600 transition-colors duration-500 text-justify grow">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
