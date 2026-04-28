"use client";

import Image from "next/image";

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
  const title = client.alt || `Client ${index + 1}`;

  return (
    <div className="flex flex-col gap-2">
      <div className="relative overflow-hidden bg-gray-100 aspect-square">
        {isVideo ? (
          <video
            src={client.mediaUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            aria-label={title}
          />
        ) : (
          <Image
            src={client.mediaUrl}
            alt={title}
            fill
            unoptimized
            className="object-cover hover:scale-110 transition-transform duration-300"
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
