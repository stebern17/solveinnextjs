import { baseURL, fetchAPI } from "@/lib/api";

type RawServicePoint = {
  ServicePoint?: string | null;
  point?: string | null;
  order?: number | null;
};

type RawServiceImage = {
  url?: string | null;
};

type RichTextDescription = {
  html?: string | null;
  text?: string | null;
};

type RawServiceItem = {
  id?: number | null;
  Name?: string | null;
  name?: string | null;
  Description?: string | null;
  description?: RichTextDescription | string | null;
  Image?: RawServiceImage | null;
  image?: string | RawServiceImage | null;
  Point?: RawServicePoint[] | null;
  points?: RawServicePoint[] | null;
};

type ServicesResponse = {
  data?: RawServiceItem[];
} | RawServiceItem[];

export type ServiceItem = {
  title: string;
  slug: string;
  description: string;
  image: string;
  features: string[];
};

const createServiceSlug = (title: string) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const resolveAssetUrl = (url?: string | null) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  if (url.startsWith("/")) return `${baseURL}${url}`;
  return `${baseURL}/storage/${url}`;
};

export async function getServices() {
  const res = (await fetchAPI("/api/services", {
    revalidate: 43200, // 12 hours
    tags: ["services", "services-images"],
  })) as ServicesResponse;

  const items = Array.isArray(res) ? res : (res?.data ?? []);

  return items
    .map((item) => {
      const title = item.name ?? item.Name ?? "";
      const description =
        typeof item.description === "string"
          ? item.description
          : (item.description?.text ?? item.Description ?? "");
      const image =
        typeof item.image === "string"
          ? item.image
          : (item.image?.url ?? item.Image?.url);
      const points = item.points ?? item.Point ?? [];

      return {
        title,
        slug: createServiceSlug(title),
        description,
        image: resolveAssetUrl(image),
        features: points
          .slice()
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
          .map((point) => point?.point ?? point?.ServicePoint ?? "")
          .filter(Boolean),
      };
    })
    .filter((item) => item.title);
}
