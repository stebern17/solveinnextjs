import { fetchAPI } from "@/lib/api";

type RichTextField = {
  html?: string | null;
  text?: string | null;
};

type HeroSectionData = {
  hero_section?: RichTextField | null;
  about?: RichTextField | null;
};

type HeroSectionResponse = HeroSectionData[] | { data?: HeroSectionData[] };

export type HeroSectionContent = {
  heroSection: {
    text: string;
    html: string;
  };
  about: {
    text: string;
    html: string;
  };
};

const emptyContent: HeroSectionContent = {
  heroSection: {
    text: "",
    html: "",
  },
  about: {
    text: "",
    html: "",
  },
};

export async function getHeroSection(): Promise<HeroSectionContent> {
  const res = (await fetchAPI("/api/contents", {
    cache: "no-cache",
    tags: ["hero-section"],
  })) as HeroSectionResponse;

  const data = Array.isArray(res)
    ? res[0]
    : Array.isArray(res?.data)
      ? res.data[0]
      : null;

  if (!data) return emptyContent;

  return {
    heroSection: {
      text: data.hero_section?.text ?? "",
      html: data.hero_section?.html ?? "",
    },
    about: {
      text: data.about?.text ?? "",
      html: data.about?.html ?? "",
    },
  };
}
