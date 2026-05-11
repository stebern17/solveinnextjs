"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";

const EndlessRunner = dynamic(
  () => import("@/components/layouts/EndlessRunner"),
  { ssr: false },
);

const WEBM_SRC = "/videos/hero_video.webm";
const MP4_SRC = "/videos/hero_video.mp4";

export default function GameHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [videoSrc, setVideoSrc] = useState(WEBM_SRC);

  const handleVideoError = () => {
    if (videoSrc === MP4_SRC) return;
    setVideoSrc(MP4_SRC);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        key={videoSrc}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        onError={handleVideoError}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center gap-8 sm:gap-10 py-8">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl uppercase font-zalando font-bold text-center max-w-4xl text-white">
          Built To Evolve. <br /> Made To Solve.
        </h1>

        <EndlessRunner />
      </div>
    </section>
  );
}
