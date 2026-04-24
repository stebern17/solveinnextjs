"use client";

import { useState } from "react";

type MainClientItem = {
  mediaUrl: string;
  alt?: string | null;
  desc?: string | null;
  mime?: string | null;
};

type BigBrandPartnerCardProps = {
  client: MainClientItem;
  index: number;
  isVideo: boolean;
};

export default function BigBrandPartnerCard({
  client,
  index,
  isVideo,
}: BigBrandPartnerCardProps) {
  const [isMediaLoaded, setIsMediaLoaded] = useState(false);
  const title = client.alt || `Client ${index + 1}`;

  return (
    <div className="flex flex-col gap-2">
      <div className="relative overflow-hidden">
        {!isMediaLoaded ? (
          <div
            className="absolute inset-0 z-10 animate-pulse bg-gray-200"
            aria-hidden="true"
          />
        ) : null}

        {isVideo ? (
          <video
            src={client.mediaUrl}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setIsMediaLoaded(true)}
            onCanPlay={() => setIsMediaLoaded(true)}
            className={`w-full aspect-square object-cover transition-opacity duration-300 ${
              isMediaLoaded ? "opacity-100" : "opacity-0"
            }`}
            aria-label={title}
          />
        ) : (
          <img
            src={client.mediaUrl}
            alt={title}
            onLoad={() => setIsMediaLoaded(true)}
            onError={() => setIsMediaLoaded(true)}
            className={`w-full aspect-square object-cover transition-[transform,opacity] duration-500 ease-out ${
              isMediaLoaded ? "opacity-100" : "opacity-0"
            } hover:scale-110`}
          />
        )}
      </div>

      <h3 className="font-zalando uppercase text-xl sm:text-2xl text-gray-800 transition-colors duration-500 font-bold tracking-wide">
        {title}
      </h3>

      {client.desc ? (
        <p className="text-justify text-sm sm:text-base font-extralight text-zinc-700 transition-colors duration-500">
          {client.desc}
        </p>
      ) : null}
    </div>
  );
}
