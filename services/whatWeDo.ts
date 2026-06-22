import { baseURL, fetchAPI } from "@/lib/api";

type RichTextField = {
  html?: string | null;
  text?: string | null;
};

type WhatWeDoData = {
  "title-1"?: string | null;
  "description-1"?: RichTextField | null;
  "image-1"?: string | null;

  "title-2"?: string | null;
  "description-2"?: RichTextField | null;
  "image-2"?: string | null;

  "title-3"?: string | null;
  "description-3"?: RichTextField | null;
  "image-3"?: string | null;
};

const resolveAssetUrl = (url?: string | null) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;

  return `${baseURL}/storage/${url}`;
};

export async function getMainClient() {
  const res = (await fetchAPI("/api/what-we-do", {
    revalidate: 43200, // 12 hours
  })) as WhatWeDoData[] | { data?: WhatWeDoData[] };

  const data = Array.isArray(res)
    ? res[0]
    : Array.isArray(res?.data)
      ? res.data[0]
      : null;

  if (!data) {
    return {
      clients: [],
    };
  }

  return {
    clients: [
      {
        title: data["title-1"],
        mediaUrl: resolveAssetUrl(data["image-1"]),
        alt: data["title-1"],
        desc: data["description-1"]?.text,
        html: data["description-1"]?.html,
        mime: "image/webp",
      },
      {
        title: data["title-2"],
        mediaUrl: resolveAssetUrl(data["image-2"]),
        alt: data["title-2"],
        desc: data["description-2"]?.text,
        html: data["description-2"]?.html,
        mime: "image/webp",
      },
      {
        title: data["title-3"],
        mediaUrl: resolveAssetUrl(data["image-3"]),
        alt: data["title-3"],
        desc: data["description-3"]?.text,
        html: data["description-3"]?.html,
        mime: "image/webp",
      },
    ],
  };
}
