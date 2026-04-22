import { fetchAPI } from "@/lib/api";

export async function getClients() {
  const res = (await fetchAPI("/api/clients?populate=*")) as any;

  return res?.data?.map((item: any) => ({
    name: item.Client_Name,
    logo: item.Logo?.url,
    alt: item.Client_Name,
  }));
}
