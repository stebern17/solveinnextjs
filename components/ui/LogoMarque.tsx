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
  const trackRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [trackWidth, setTrackWidth] = useState(0);

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

  useEffect(() => {
    if (!trackRef.current) return;

    // Ukur lebar SATU set logo saja (bukan keduanya)
    const fullWidth = trackRef.current.scrollWidth;
    const singleSetWidth = fullWidth / 2;
    setTrackWidth(singleSetWidth);
  }, [logoEntries.length]);

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

  const handleImageLoad = useCallback(() => {
    if (!trackRef.current) return;
    const fullWidth = trackRef.current.scrollWidth;
    const singleSetWidth = fullWidth / 2;
    setTrackWidth(singleSetWidth);
  }, []);

  return (
    <div className="w-full overflow-hidden py-10 marquee-fade">
      <motion.div ref={trackRef} className="flex w-max" animate={controls}>
        {[...logoEntries, ...logoEntries].map(({ src, alt }, index) => (
          <div key={index} className="flex-shrink-0 px-8">
            <img
              src={src}
              alt={alt}
              className="h-16 object-contain"
              onLoad={handleImageLoad}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
