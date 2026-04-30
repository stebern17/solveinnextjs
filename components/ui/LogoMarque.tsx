"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { getClients } from "@/services/client";
import { baseURL } from "@/lib/api";

type ClientLogo = {
  name: string;
  logo?: string | null;
};

export default function LogoMarquee() {
  const [clients, setClients] = useState<ClientLogo[]>([]);
  const viewportRef = useRef<HTMLDivElement>(null);
  const singleSetRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [singleSetWidth, setSingleSetWidth] = useState(0);
  const [repeatCount, setRepeatCount] = useState(2);

  const resolveLogoUrl = useCallback((logo?: string | null) => {
    if (!logo) return "";
    if (logo.startsWith("http")) return logo;
    return `${baseURL}${logo}`;
  }, []);

  const logoEntries = clients
    .map((client) => ({
      src: resolveLogoUrl(client.logo),
      alt: client.name,
    }))
    .filter((entry) => entry.src);

  useEffect(() => {
    let isMounted = true;

    const loadClients = async () => {
      try {
        const data = await getClients();
        if (!isMounted) return;
        setClients(data || []);
      } catch (error) {
        console.error("Failed to load clients", error);
      }
    };

    loadClients();

    return () => {
      isMounted = false;
    };
  }, []);

  const measureTrack = useCallback(() => {
    if (!viewportRef.current || !singleSetRef.current) return;

    const viewportWidth = viewportRef.current.offsetWidth;
    const measuredSingleSetWidth = singleSetRef.current.scrollWidth;

    if (viewportWidth <= 0 || measuredSingleSetWidth <= 0) return;

    setSingleSetWidth(measuredSingleSetWidth);

    // Ensure total track width always covers viewport while shifting by one full set.
    const minRepeats = Math.max(
      2,
      Math.ceil(
        (viewportWidth + measuredSingleSetWidth) / measuredSingleSetWidth,
      ),
    );
    setRepeatCount(minRepeats);
  }, []);

  useEffect(() => {
    if (logoEntries.length === 0) {
      controls.stop();
      return;
    }

    measureTrack();

    const observer = new ResizeObserver(() => {
      measureTrack();
    });

    if (viewportRef.current) observer.observe(viewportRef.current);
    if (singleSetRef.current) observer.observe(singleSetRef.current);

    return () => observer.disconnect();
  }, [logoEntries.length, controls, measureTrack]);

  useEffect(() => {
    if (singleSetWidth === 0) return;

    controls.start({
      x: [0, -singleSetWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 50,
        },
      },
    });
  }, [singleSetWidth, controls]);

  const handleImageLoad = useCallback(() => {
    measureTrack();
  }, [measureTrack]);

  const repeatedSets = Array.from(
    { length: repeatCount },
    (_, setIndex) => setIndex,
  );

  return (
    <div
      ref={viewportRef}
      className="w-full overflow-hidden py-10 marquee-fade"
    >
      <motion.div className="flex w-max" animate={controls}>
        {repeatedSets.map((setIndex) => (
          <div
            key={setIndex}
            ref={setIndex === 0 ? singleSetRef : undefined}
            className="flex"
          >
            {logoEntries.map(({ src, alt }, logoIndex) => (
              <div
                key={`${setIndex}-${logoIndex}-${src}`}
                className="flex-shrink-0 px-8"
              >
                <img
                  src={src}
                  alt={alt}
                  className="h-16 object-contain"
                  onLoad={handleImageLoad}
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
