"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroService from "./heroService";
import ServiceSideBar from "./serviceSideBar";

const servicesData = [
  {
    title: "Social Media Management",
    image: "/images/hero_image.jpg",
    description:
      "Social media management services to help brands build a consistent and impactful digital presence, from content strategy to account management, along with digital campaign integration and performance optimization.",
    features: [
      "Increase brand awareness and visibility",
      "Build consistent engagement with the audience",
      "Strengthen brand positioning in the digital space",
      "Drive traffic and conversions through content",
    ],
  },
  {
    title: "Website",
    image: "/images/hero_image.jpg",
    description:
      "Professional website development and management services designed to strengthen brand credibility, support business objectives, and optimize user experience.",
    features: [
      "Enhance brand credibility and trust",
      "Optimize user experience (UX)",
      "Increase conversion rates",
      "Support business digital needs",
    ],
  },
];

export default function ServicesClient() {
  const [activeTitle, setActiveTitle] = useState(servicesData[0].title);

  const activeService = useMemo(
    () =>
      servicesData.find((service) => service.title === activeTitle) ||
      servicesData[0],
    [activeTitle],
  );

  return (
    <div className="container-hero">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
        <div>
          <ServiceSideBar
            services={servicesData.map((service) => ({ title: service.title }))}
            activeTitle={activeTitle}
            onSelect={setActiveTitle}
          />
        </div>

        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.title}
              initial={{ opacity: 0, y: 20, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.985 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <HeroService
                title={activeService.title}
                description={activeService.description}
                image={activeService.image}
                features={activeService.features}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
