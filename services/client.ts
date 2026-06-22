import { baseURL, fetchAPI } from "@/lib/api";

export async function getClients() {
  const res = (await fetchAPI(
    "/api/clients",
    { revalidate: 43200 }, // 12 hours
  )) as any;

  const resolveAssetUrl = (url?: string | null) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;

    return `${baseURL}/storage/${url}`;
  };

  return res?.map((item: any) => ({
    name: item.name,
    logo: resolveAssetUrl(item.logo),
    alt: item.name,
  }));
}
