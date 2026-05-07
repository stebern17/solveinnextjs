"use client";

import { useEffect, useRef, useState } from "react";
import { getServices, type ServiceItem } from "@/services/services";

export default function SolveinServices() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const wRef = useRef<HTMLSpanElement | null>(null);
  const [services, setServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    let isMounted = true;

    const loadServices = async () => {
      try {
        const data = await getServices();
        if (!isMounted) return;
        setServices(data || []);
      } catch (error) {
        console.error("Failed to load services", error);
      }
    };

    loadServices();

    return () => {
      isMounted = false;
    };
  }, []);
  useEffect(() => {
    const section = sectionRef.current;
    const cursor = cursorRef.current;
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between md:gap-3 mb-4 md:mb-6">
        <h1
          ref={headingRef}
          className="text-2xl sm:text-4xl font-bold font-zalando uppercase md:mb-2 z-25 relative text-gray-800 transition-colors duration-500 mt-6 "
        >
          <span ref={wRef}>W</span>hat Can We Solve?
        </h1>
        <a
          href="/services"
          className="text-[#ff6f00] hover:text-[#ff6f00]/60 transition-colors duration-300 cursor-none"
        >
          Learn More
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative flex min-h-[180px] flex-col overflow-hidden rounded-xl border border-[#ff6f00] bg-[#ff6f00] p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:border-gray-300"
          >
            <div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,111,0,0.25),rgba(255,111,0,0))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-[0.2em] text-white/80 transition-colors duration-500 group-hover:text-gray-500">
                0{index + 1}
              </span>
              <span className="h-px w-12 bg-white/40 transition-all duration-300 group-hover:w-20 group-hover:bg-[#ff6f00]" />
            </div>
            <div className="flex flex-1 items-center justify-center px-2">
              <h2 className="text-center text-xl font-bold font-zalando uppercase text-white transition-colors duration-500 group-hover:text-gray-800">
                {service.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
