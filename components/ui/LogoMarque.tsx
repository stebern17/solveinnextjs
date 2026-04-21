"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const logos = {
  "images/logo/dummyBrand/logo1.png": "Brand 1",
  "images/logo/dummyBrand/logo2.png": "Brand 2",
  "images/logo/dummyBrand/logo3.png": "Brand 3",
  "images/logo/dummyBrand/logo4.png": "Brand 4",
  "images/logo/dummyBrand/logo5.png": "Brand 5",
  "images/logo/dummyBrand/logo6.png": "Brand 6",
  "images/logo/dummyBrand/logo7.png": "Brand 7",
  "images/logo/dummyBrand/logo8.png": "Brand 8",
};

export default function LogoMarquee() {
  const logoEntries = Object.entries(logos);
  const trackRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (!trackRef.current) return;

    // Ukur lebar SATU set logo saja (bukan keduanya)
    const fullWidth = trackRef.current.scrollWidth;
    const singleSetWidth = fullWidth / 2;
    setTrackWidth(singleSetWidth);
  }, []);

  useEffect(() => {
    if (trackWidth === 0) return;

    controls.start({
      x: [0, -trackWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 20,
        },
      },
    });
  }, [trackWidth, controls]);

  return (
    <div className="w-full overflow-hidden py-10 marquee-fade">
      <motion.div ref={trackRef} className="flex w-max" animate={controls}>
        {[...logoEntries, ...logoEntries].map(([src, alt], index) => (
          <div key={index} className="flex-shrink-0 px-8">
            <img src={src} alt={alt} className="h-16 object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
