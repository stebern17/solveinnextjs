import type { Metadata } from "next";
import { Suspense } from "react";
import HeroSection from "./home/heroSection";
import HeroVideo from "./home/heroVideo";
import SolveinSection from "./home/solveinSection";
import Devider from "../components/ui/Devider";
import BigBrandPartner, {
  BigBrandPartnerSkeleton,
} from "./home/bigBrandPartner";
import SolveinServices from "./home/solveinServices";
import GameSection from "./home/gameSection";
import PartnerSection from "./home/partnerSection";
import { CTASection } from "./home/CTASection";

const siteUrl = "https://solvein.id";

export const metadata: Metadata = {
  title: "Solvein Brand Architecture Agency",
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
    title: "Solvein Brand Architecture Agency",
    description:
      "Solvein adalah digital agency Indonesia yang membantu brand bertumbuh melalui strategi terarah, eksekusi terintegrasi, dan hasil yang terukur.",
    url: siteUrl,
    images: ["/images/logo/og_image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solvein Brand Architecture Agency",
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
      <Suspense fallback={<BigBrandPartnerSkeleton />}>
        <BigBrandPartner />
      </Suspense>
      <PartnerSection />
      <SolveinServices />
      <GameSection />
      <CTASection />
    </>
  );
}
