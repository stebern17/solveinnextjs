import { getMainClient } from "@/services/whatWeDo";
import BigBrandPartnerCard from "./BigBrandPartnerCard";

type MainClientItem = {
  title?: string | null;
  mediaUrl: string;
  alt?: string | null;
  desc?: string | null;
  html?: string | null;
  mime?: string | null;
};

export function BigBrandPartnerSkeleton() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="overflow-hidden">
            <div className="w-full aspect-square bg-gray-200 animate-pulse" />
          </div>
          <div className="h-6 w-2/3 bg-gray-200 animate-pulse" />
          <div className="h-4 w-full bg-gray-200 animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-200 animate-pulse" />
        </div>
      ))}
    </section>
  );
}

const isVideoAsset = (item: MainClientItem) => {
  if (item.mime?.startsWith("video")) return true;
  return item.mediaUrl.endsWith(".webm") || item.mediaUrl.endsWith(".mp4");
};

export default async function BigBrandPartner() {
  const data = await getMainClient();
  const clients = (data?.clients || []).filter(
    (item: MainClientItem) => item.mediaUrl,
  );

  if (!clients.length) return null;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container">
      {clients.map((client, index) => {
        const isVideo = isVideoAsset(client);

        return (
          <BigBrandPartnerCard
            key={client.mediaUrl}
            client={client}
            index={index}
            isVideo={isVideo}
          />
        );
      })}
    </section>
  );
}
