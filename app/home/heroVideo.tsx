"use client";

import { useState } from "react";

const WEBM_SRC = "/videos/hero_video.webm";
const MP4_SRC = "/videos/hero_video.mp4";

export default function HeroVideo() {
  const [videoSrc, setVideoSrc] = useState(WEBM_SRC);

  const handleVideoError = () => {
    if (videoSrc === MP4_SRC) return;
    setVideoSrc(MP4_SRC);
  };

  return (
    <div className="relative w-full min-h-[60vh] sm:min-h-screen overflow-hidden">
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
      <h1 className="absolute inset-0 flex items-center text-center justify-center text-3xl sm:text-6xl uppercase font-zalando font-bold text-white">
        Built To Evolve. <br /> Made To Solve.
      </h1>
    </div>
  );
}
