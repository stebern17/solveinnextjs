"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Noise from "../ui/noise/Noise";

interface IntroLoaderProps {
  initialShow?: boolean;
  visible?: boolean;
  autoHideAfterMs?: number | null;
}

export default function IntroLoader({
  initialShow = true,
  visible,
  autoHideAfterMs = 3000,
}: IntroLoaderProps) {
  const [show, setShow] = useState(initialShow);

  useEffect(() => {
    if (typeof visible !== "boolean") return;
    setShow(visible);
  }, [visible]);

  useEffect(() => {
    if (!show) return;
    if (autoHideAfterMs === null) return;

    const timer = setTimeout(() => {
      setShow(false);
    }, autoHideAfterMs);

    return () => clearTimeout(timer);
  }, [show, autoHideAfterMs]);

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
                className={`text-8xl font-zalando uppercase font-bold ${
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
