import { baseURL, fetchAPI } from "@/lib/api";

type RawServicePoint = {
  ServicePoint?: string | null;
};

type RawServiceImage = {
  url?: string | null;
};

type RawServiceItem = {
  Name?: string | null;
  Description?: string | null;
  Image?: RawServiceImage | null;
  Point?: RawServicePoint[] | null;
};

type ServicesResponse = {
  data?: RawServiceItem[];
};

export type ServiceItem = {
  title: string;
  description: string;
  image: string;
  features: string[];
};

const resolveAssetUrl = (url?: string | null) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${baseURL}${url}`;
};

export async function getServices() {
  const res = (await fetchAPI("/api/services?populate=*", {
    revalidate: 43200, // 12 hours
    tags: ["services", "services-images"],
  })) as ServicesResponse;

  const items = res?.data ?? [];

  return items
    .map((item) => ({
      title: item.Name ?? "",
      description: item.Description ?? "",
      image: resolveAssetUrl(item.Image?.url),
      features: (item.Point ?? [])
        .map((point) => point?.ServicePoint ?? "")
        .filter(Boolean),
    }))
    .filter((item) => item.title);
}
