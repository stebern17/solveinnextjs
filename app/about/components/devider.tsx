"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Devider() {
  const { scrollYProgress } = useScroll();

  // ubah progress scroll jadi skala 0 → 1
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="container flex flex-col gap-2">
      <span className="font-zalando uppercase text-end text-[#ff6f00]">
        Solvein
      </span>

      <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          style={{ scaleX }}
          className="h-full bg-[#ff6f00] origin-left"
        />
      </div>

      <span className="font-zalando uppercase">2026</span>
    </div>
  );
}
