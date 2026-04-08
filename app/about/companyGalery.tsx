"use client";

import { useState } from "react";

export default function CompanyGalery() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const images = [
    "/images/hero_image.jpg",
    "/images/hero_image.jpg",
    "/images/hero_image.jpg",
  ];

  return (
    <section className="container min-h-[60vh] flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-10 lg:gap-16 py-6">
      <div className="max-w-md">
        <h5 className="text-justify text-sm sm:text-base font-zalando">
          We're the team behind the scenes, the architects of innovation, and
          the driving
        </h5>
      </div>

      {/* Image Stack */}
      <div className="relative mx-auto h-96 sm:h-[28rem] lg:h-155 w-full max-w-sm sm:max-w-md lg:w-155">
        <img
          src={images[0]}
          className={`absolute h-[300px] w-[200px] md:h-[300px] md:w-[250px] lg:h-[450px] lg:w-[300px] object-cover rounded-xl shadow-xl rotate-[-8deg] left-1/2 top-1/2 -translate-x-[66%] -translate-y-[60%] hover:rotate-0 hover:scale-105 transition-all duration-300 ${
            hoveredImage === 0 ? "z-30" : "z-10"
          }`}
          onMouseEnter={() => setHoveredImage(0)}
          onMouseLeave={() => setHoveredImage(null)}
          alt="company"
        />

        <img
          src={images[1]}
          className={`absolute h-[300px] w-[200px] md:h-[300px] md:w-[250px] lg:h-[450px] lg:w-[300px] object-cover rounded-xl shadow-xl rotate-6 left-1/2 top-1/2 -translate-x-[18%] -translate-y-[56%] hover:rotate-0 hover:scale-105 transition-all duration-300 ${
            hoveredImage === 1 ? "z-30" : "z-20"
          }`}
          onMouseEnter={() => setHoveredImage(1)}
          onMouseLeave={() => setHoveredImage(null)}
          alt="company"
        />

        <img
          src={images[2]}
          className={`absolute h-[300px] w-[200px] md:h-[300px] md:w-[250px] lg:h-[450px] lg:w-[300px] object-cover rounded-xl shadow-xl rotate-[-4deg] left-1/2 top-1/2 -translate-x-[42%] -translate-y-[40%] hover:rotate-0 hover:scale-105 transition-all duration-300 ${
            hoveredImage === 2 ? "z-30" : "z-20"
          }`}
          onMouseEnter={() => setHoveredImage(2)}
          onMouseLeave={() => setHoveredImage(null)}
          alt="company"
        />
      </div>
    </section>
  );
}
