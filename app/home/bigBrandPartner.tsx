import { getMainClient } from "@/services/mainClient";

type MainClientItem = {
  mediaUrl: string;
  alt?: string | null;
  desc?: string | null;
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
        const title = client.alt || `Client ${index + 1}`;
        const isVideo = isVideoAsset(client);

        return (
          <div key={client.mediaUrl} className="flex flex-col gap-2">
            <div className="overflow-hidden">
              {isVideo ? (
                <video
                  src={client.mediaUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-square object-cover"
                  aria-label={title}
                />
              ) : (
                <img
                  src={client.mediaUrl}
                  alt={title}
                  className="w-full aspect-square object-cover transition-transform duration-500 ease-out hover:scale-110"
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
      })}
    </section>
  );
}
