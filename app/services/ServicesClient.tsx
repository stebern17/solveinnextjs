"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroService from "./heroService";
import ServiceSideBar from "./serviceSideBar";

const servicesData = [
  {
    title: "Social Media Management",
    image: "/images/services/SOCIAL-MEDIA-MANAGEMENT.webp",
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
    image: "/images/services/WEBSITE.webp",
    description:
      "Professional website development and management services designed to strengthen brand credibility, support business objectives, and optimize user experience.",
    features: [
      "Enhance brand credibility and trust",
      "Optimize user experience (UI/UX)",
      "Increase conversion rates",
      "Support business digital needs",
    ],
  },
  {
    title: "Business & Marketing Consulting",
    image: "/images/services/BUSINESS-&-MARKETING.webp",
    description:
      "Business and digital marketing consulting services to help brands gain strategic clarity, develop data-driven digital strategies, and build measurable growth frameworks.",
    features: [
      "Provide clarity in business direction and strategy",
      "Identify growth opportunities",
      "Improve decision-making effectiveness",
      "Align business and marketing strategies",
    ],
  },
  {
    title: "Branding",
    image: "/images/services/BRANDING-PRODUCT.webp",
    description:
      "Branding services to build a strong brand identity, from brand foundations to visual systems and consistent communication strategies.",
    features: [
      "Build a clear and strong brand identity",
      "Increase market differentiation",
      "Strengthen brand communication consistency",
      "Enhance brand attractiveness and relevance",
    ],
  },
  {
    title: "Photo & Video Production",
    image: "/images/services/PHOTO-VIDEO-PRODUCTION.webp",
    description:
      "Professional photo and video production services, from concept development to execution, to support brand communication needs.",
    features: [
      "Improve brand visual quality",
      "Strengthen brand storytelling",
      "Support marketing content needs",
      "Increase engagement through visual content",
    ],
  },
  {
    title: "Product & Print Design",
    image: "/images/services/PRODUCT-PRINT-DESIGN.webp",
    description:
      "Product and print design services to support brand visual needs, from design development to mockups and presentation materials.",
    features: [
      "Enhance visual quality and brand presentation",
      "Strengthen communication through design",
      "Support promotional material needs",
      "Increase product appeal",
    ],
  },
  {
    title: "Paid Ads",
    image: "/images/services/PAID-ADS.webp",
    description:
      "Data-driven digital advertising services to help brands reach the right audience through strategy, execution, and campaign optimization.",
    features: [
      "Increase reach to relevant audiences",
      "Drive traffic and generate leads",
      "Optimize campaign performance",
      "Improve marketing ROI",
    ],
  },
  {
    title: "Media Placement",
    image: "/images/services/MEDIA-PLACEMENT.webp",
    description:
      "Media placement services to expand brand exposure through strategic channel selection and cross-media content distribution.",
    features: [
      "Increase brand exposure and publication",
      "Reach a wider audience",
      "Build credibility through media",
      "Optimize brand message distribution",
    ],
  },
  {
    title: "Influencer & Community",
    image: "/images/services/INFLUENCER-&-COMMUNITY.webp",
    description:
      "Influencer and community services to help brands build strategic collaborations with KOLs, KOCs, and relevant communities to expand reach and strengthen meaningful audience connections.",
    features: [
      "Increase awareness through influencer and community collaborations",
      "Expand reach to more relevant audiences",
      "Build brand trust and credibility",
      "Drive engagement through community-based approaches",
    ],
  },
  {
    title: "Integrated Activation",
    image: "/images/services/INTEGRATED-ACTIVATION.webp",
    description:
      "Integrated activation services to unify multiple marketing channels into a cohesive and strategic approach.",
    features: [
      "Integrate multiple marketing channels",
      "Improve campaign effectiveness",
      "Create a consistent brand experience",
      "Drive greater business impact",
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
