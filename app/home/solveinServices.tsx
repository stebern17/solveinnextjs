"use client";

import { useEffect, useRef } from "react";

export default function SolveinServices() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
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
    if (!section || !cursor) return;
    const cursorSize = 48;

    const setCursorToHeading = () => {
      if (!heading) return;
      const sectionRect = section.getBoundingClientRect();
      const headingRect = heading.getBoundingClientRect();
      const x = headingRect.left - sectionRect.left - cursorSize / 2 - 12;
      const y = headingRect.top - sectionRect.top + headingRect.height / 2;

      cursor.style.opacity = "1";
      cursor.style.transition = "transform 500ms ease, opacity 300ms ease";
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const handleMove = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      cursor.style.opacity = "1";
      cursor.style.transition = "transform 80ms linear, opacity 150ms ease";
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const handleLeave = () => {
      setCursorToHeading();
    };

    const handleResize = () => {
      setCursorToHeading();
    };

    const handleScroll = () => {
      setCursorToHeading();
    };

    setCursorToHeading();

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
      className="container py-10 relative cursor-none dark:text-white"
    >
      <div
        ref={cursorRef}
        className="pointer-events-none absolute left-12 -top-2 z-20 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff6f00]/50 bg-[#ff6f00]/10 duration-500 ease-out"
      />
      <h1
        ref={headingRef}
        className="text-3xl font-bold font-zalando uppercase mb-2 z-25 relative text-gray-800 transition-colors duration-500"
      >
        What Can We Do
      </h1>
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
