"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import HeroService from "./heroService";
import ServiceSideBar from "./serviceSideBar";
import { getServices, type ServiceItem } from "@/services/services";

export default function ServicesClient() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const searchParams = useSearchParams();
  const activeSlug = searchParams.get("service") ?? "";

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

  const activeService = useMemo(
    () =>
      services.find((service) => service.slug === activeSlug) || services[0],
    [activeSlug, services],
  );

  if (!services.length || !activeService) return null;

  return (
    <div className="container-hero">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
        <div>
          <ServiceSideBar
            services={services.map((service) => ({
              title: service.title,
              slug: service.slug,
            }))}
            activeSlug={activeService.slug}
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
