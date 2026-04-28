import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "./home/heroSection";
import HeroVideo from "./home/heroVideo";
import SolveinSection from "./home/solveinSection";
import Devider from "../components/ui/Devider";
import BigBrandPartner, {
  BigBrandPartnerSkeleton,
} from "./home/bigBrandPartner";
import SolveinServices from "./home/solveinServices";
import GameSection from "./home/gameSection";
import { CTASection } from "./home/CTASection";

const PartnerSection = dynamic(() => import("./home/partnerSection"), {
  loading: () => (
    <section className="mt-6 flex flex-col gap-4">
      <div className="font-zalando container uppercase font-bold text-2xl h-8 bg-gray-200 w-32 animate-pulse" />
      <div className="h-20 bg-gray-200 animate-pulse rounded" />
    </section>
  ),
  ssr: true,
});

const LazyBigBrandPartner = dynamic(
  () => import("./home/bigBrandPartner").then((mod) => mod.default),
  {
    loading: () => <BigBrandPartnerSkeleton />,
    ssr: true,
  },
);

const siteUrl = "https://solvein.id";

export const metadata: Metadata = {
  title: "Solvein Creative & Digital Agency",
  description:
    "Solvein adalah digital agency Indonesia yang membantu brand bertumbuh melalui strategi terarah, eksekusi terintegrasi, dan hasil yang terukur.",
  keywords: [
    "Solvein",
    "digital agency Indonesia",
    "digital marketing agency Indonesia",
    "jasa digital marketing",
    "digital agency Jogja",
    "digital agency Jakarta",
    "konsultan digital marketing",
    "marketing consultant Indonesia",
    "social media management agency",
    "jasa branding perusahaan",
    "jasa pembuatan website profesional",
    "jasa branding UMKM",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Solvein Creative & Digital Agency",
    description:
      "Solvein adalah digital agency Indonesia yang membantu brand bertumbuh melalui strategi terarah, eksekusi terintegrasi, dan hasil yang terukur.",
    url: siteUrl,
    images: ["/images/logo/og_image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solvein Creative & Digital Agency",
    description:
      "Solvein adalah digital agency Indonesia yang membantu brand bertumbuh melalui strategi terarah, eksekusi terintegrasi, dan hasil yang terukur.",
    images: ["/images/logo/og_image.png"],
  },
};

export default function Home() {
  return (
    <>
      <HeroVideo />
      <HeroSection />
      <Devider />
      <SolveinSection />
      <LazyBigBrandPartner />
      <PartnerSection />
      <SolveinServices />
      <GameSection />
      <CTASection />
    </>
  );
}
