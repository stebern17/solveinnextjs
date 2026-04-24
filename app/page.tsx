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
  title: "Solvein Digital Agency",
  description:
    "Solve What Matters. Solvein is a digital agency delivering brand strategy, design, marketing, and web development.",
  keywords: [
    "Solvein",
    "digital agency",
    "brand strategy",
    "UI UX design",
    "digital marketing",
    "web development",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Solvein Digital Agency",
    description:
      "Solve What Matters. Solvein helps businesses grow with strategy, design, marketing, and web development.",
    url: siteUrl,
    images: ["/images/logo/og_image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solvein Digital Agency",
    description:
      "Solve What Matters. Solvein helps businesses grow with strategy, design, marketing, and web development.",
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
