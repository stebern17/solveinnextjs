"use client";

import { motion } from "framer-motion";

type Service = {
  title: string;
};

type ServiceSideBarProps = {
  services: Service[];
  activeTitle: string;
  onSelect: (title: string) => void;
};

export default function ServiceSideBar({
  services,
  activeTitle,
  onSelect,
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
      <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 font-zalando uppercase">
        Services
      </h3>

      <motion.ul
        className="font-zalando lg:flex lg:flex-col grid grid-cols-2 items-stretch gap-3"
        variants={listVariants}
        initial="hidden"
        animate="show"
      >
        {services.map((service) => {
          const isActive = service.title === activeTitle;

          return (
            <motion.li key={service.title} variants={itemVariants}>
              <motion.button
                type="button"
                onClick={() => onSelect(service.title)}
                className={`h-full w-full text-left rounded-full border px-4 sm:px-6 py-3 text-xs sm:text-base uppercase transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? "bg-black text-[#ff6f00] border-black"
                    : "bg-transparent text-black border-black/45 hover:bg-black hover:text-[#ff6f00]"
                }`}
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
              >
                {service.title}
              </motion.button>
            </motion.li>
          );
        })}
      </motion.ul>
    </aside>
  );
}
