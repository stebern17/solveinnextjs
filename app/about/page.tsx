import type { Metadata } from "next";
import HeroSection from "./heroSection";
import Devider from "./components/devider";
import CompanyGalery from "./companyGalery";
import VisionMission from "./visionMission";

const siteUrl = "https://solvein.id";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Solvein, our mission, and how we help brands solve what matters through strategy and design.",
  keywords: [
    "about Solvein",
    "digital agency",
    "brand strategy",
    "creative design",
    "team",
  ],
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About Solvein",
    description:
      "Meet Solvein and our mission to solve what matters with strategy, design, and digital expertise.",
    url: `${siteUrl}/about`,
    images: ["/images/logo/og_image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Solvein",
    description:
      "Meet Solvein and our mission to solve what matters with strategy, design, and digital expertise.",
    images: ["/images/logo/og_image.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <Devider />
      <CompanyGalery />
      <VisionMission />
    </>
  );
}
