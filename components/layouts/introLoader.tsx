"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Noise from "../ui/noise/Noise";

export default function IntroLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000); // durasi sebelum hilang

    return () => clearTimeout(timer);
  }, []);

  const words = ["Solvein", "Solve", "What", "Matters"];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-[#eaefef]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Noise />
          <div className="text-center space-y-2">
            {words.map((word, index) => (
              <motion.h1
                key={word}
                className={`text-6xl font-zalando uppercase font-bold ${
                  word === "Solvein" ? "text-[#ff6f00]" : "text-black"
                }`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.4,
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                {word}
              </motion.h1>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
