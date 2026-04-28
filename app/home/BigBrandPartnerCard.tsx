"use client";

import Image from "next/image";

type RichTextNode = {
  text: string;
  bold?: boolean;
  type?: string;
};

type MainClientItem = {
  mediaUrl: string;
  alt?: string | null;
  desc?: RichTextNode[] | string | null;
  mime?: string | null;
};

type BigBrandPartnerCardProps = {
  client: MainClientItem;
  index: number;
  isVideo: boolean;
};

const renderRichText = (
  content: RichTextNode[] | string | null | undefined,
) => {
  if (!content) return null;

  // Handle plain string
  if (typeof content === "string") {
    return content;
  }

  // Handle rich text array
  if (Array.isArray(content)) {
    const elements: React.ReactNode[] = [];

    content.forEach((node, idx) => {
      if (typeof node === "string") {
        elements.push(node);
      } else if (node && typeof node === "object" && "text" in node) {
        if (node.bold) {
          elements.push(
            <strong key={idx} className="font-semibold">
              {node.text}
            </strong>,
          );
        } else {
          elements.push(<span key={idx}>{node.text}</span>);
        }
      }
    });

    return elements.length > 0 ? elements : null;
  }

  return null;
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
          {renderRichText(client.desc)}
        </p>
      ) : null}
    </div>
  );
}
