"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Service = {
  title: string;
  slug: string;
};

type ServiceSideBarProps = {
  services: Service[];
  activeSlug: string;
};

export default function ServiceSideBar({
  services,
  activeSlug,
}: ServiceSideBarProps) {
  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <aside className="w-full">
      <h3 className="text-2xl sm:text-3xl 2xl:text-5xl font-bold mb-6 sm:mb-8 font-zalando uppercase">
        Services
      </h3>

      <motion.ul
        className="font-zalando lg:flex lg:flex-col grid grid-cols-2 items-stretch gap-4"
        variants={listVariants}
        initial="hidden"
        animate="show"
      >
        {services.map((service) => {
          const isActive = service.slug === activeSlug;
          const href = `/services?service=${service.slug}`;

          return (
            <motion.li
              key={service.title}
              variants={itemVariants}
              className="w-full"
            >
              <Link
                href={href}
                className={`block h-full w-full text-left rounded-full border px-4 sm:px-6 py-3 text-[8px] sm:text-base uppercase transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? "bg-black text-[#ff6f00] border-black"
                    : "bg-transparent text-black border-black/45 hover:bg-black hover:text-[#ff6f00]"
                }`}
              >
                {service.title}
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </aside>
  );
}
