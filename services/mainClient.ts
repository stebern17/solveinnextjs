import { baseURL, fetchAPI } from "@/lib/api";

const resolveAssetUrl = (url?: string | null) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${baseURL}${url}`;
};

export async function getMainClient() {
  const res = (await fetchAPI("/api/main-client?populate=*")) as any;

  const data = res?.data || res;

  return {
    clients: [
      {
        mediaUrl: resolveAssetUrl(data.Client_1?.url),
        alt: data.Client_1?.alternativeText,
        desc: data.Client_1_Description?.[0]?.children?.[0]?.text,
        mime: data.Client_1?.mime,
      },
      {
        mediaUrl: resolveAssetUrl(data.Client_2?.url),
        alt: data.Client_2?.alternativeText,
        desc: data.Client_2_Description?.[0]?.children?.[0]?.text,
        mime: data.Client_2?.mime,
      },
      {
        mediaUrl: resolveAssetUrl(data.Client_3?.url),
        alt: data.Client_3?.alternativeText,
        desc: data.Client_3_Description?.[0]?.children?.[0]?.text,
        mime: data.Client_3?.mime,
      },
    ],
  };
}
