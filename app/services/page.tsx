"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroService from "./heroService";
import ServiceSideBar from "./serviceSideBar";

const servicesData = [
  {
    title: "Brand Strategy",
    image: "/images/hero_image.jpg",
    description:
      "We help businesses define who they are and why they matter through strategic clarity and compelling narratives.",
    features: [
      "Brand Audit & Market Research",
      "Brand Positioning & Value Proposition",
      "Brand Messaging Framework",
      "Brand Architecture Planning",
      "Competitive Landscape Analysis",
      "Long-Term Brand Growth Roadmap",
    ],
  },
  {
    title: "Digital Marketing",
    image: "/images/hero_image.jpg",
    description:
      "Data-driven strategies designed to increase visibility, engagement, and measurable business growth.",
    features: [
      "Social Media Strategy & Management",
      "Performance Advertising Campaigns",
      "Search Engine Optimization (SEO)",
      "Content Marketing Strategy",
      "Campaign Analytics & Optimization",
      "Lead Generation Funnel Optimization",
    ],
  },
  {
    title: "Creative Design",
    image: "/images/hero_image.jpg",
    description:
      "Transforming strategic ideas into visually compelling brand experiences that resonate and inspire.",
    features: [
      "Brand Identity & Visual System",
      "Marketing Collateral Design",
      "Campaign Creative Development",
      "UI/UX Interface Design",
      "Creative Direction & Art Supervision",
      "Visual Content Production Planning",
    ],
  },
  {
    title: "Web Development",
    image: "/images/hero_image.jpg",
    description:
      "Building seamless, high-performance digital platforms that strengthen brand presence and user experience.",
    features: [
      "Corporate Website Development",
      "Landing Page Development",
      "E-Commerce Platform Development",
      "CMS Integration",
      "Website Optimization & Maintenance",
      "Technical SEO Implementation",
    ],
  },
];

export default function ServicesPage() {
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
