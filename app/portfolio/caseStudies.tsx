"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const images = [
  "/images/casestudies/1.webp",
  "/images/casestudies/2.webp",
  "/images/casestudies/3.webp",
  "/images/casestudies/4.webp",
  "/images/casestudies/5.webp",
  "/images/casestudies/6.webp",
  "/images/casestudies/7.webp",
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const slideVariants = {
    enter: (dir: number) => ({ y: dir > 0 ? 1000 : -1000, opacity: 0 }),
    center: { zIndex: 1, y: 0, opacity: 1 },
    exit: (dir: number) => ({
      zIndex: 0,
      y: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIsLoading(true);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      return next < 0 ? images.length - 1 : next >= images.length ? 0 : next;
    });
  };

  return (
    <section id="caseStudies" className="container w-full py-12 px-4">
      <div className="flex flex-col justify-center items-center gap-6 w-full">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-zalando font-semibold uppercase mb-2">
            Case Studies
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto hidden sm:block">
            Learn how we solved real challenges for our clients
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Image Container — ukuran dikunci setelah gambar pertama load */}
          <div
            className="relative rounded-2xl shadow-2xl overflow-hidden bg-gray-100"
            style={
              dimensions
                ? { width: dimensions.width, height: dimensions.height }
                : undefined
            }
          >
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-[#ff6f00] rounded-full animate-spin" />
              </div>
            )}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  y: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className={dimensions ? "absolute inset-0" : "relative"}
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Case Study ${currentIndex + 1}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto max-h-[80vh] max-w-[90vw] block"
                  priority
                  onLoad={(e) => {
                    if (!dimensions) {
                      const img = e.currentTarget;
                      setDimensions({
                        width: img.offsetWidth,
                        height: img.offsetHeight,
                      });
                    }
                    setIsLoading(false);
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 lg:gap-6 justify-center w-full">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => paginate(-1)}
              className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#ff6f00] text-white hover:bg-[#ff6f00]/90 transition-colors duration-300 shadow-lg"
              aria-label="Previous"
            >
              <HiChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </motion.button>

            <div className="flex items-center gap-2 lg:gap-4">
              <span className="text-lg lg:text-2xl font-zalando font-semibold text-gray-800">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-gray-400">/</span>
              <span className="text-base lg:text-xl text-gray-600">
                {String(images.length).padStart(2, "0")}
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => paginate(1)}
              className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#ff6f00] text-white hover:bg-[#ff6f00]/90 transition-colors duration-300 shadow-lg"
              aria-label="Next"
            >
              <HiChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </motion.button>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#ff6f00]"
              initial={{ width: 0 }}
              animate={{
                width: `${((currentIndex + 1) / images.length) * 100}%`,
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
