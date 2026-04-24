import type { Metadata } from "next";
import HeroSection from "./heroSection";
import Devider from "./components/devider";
import CompanyGalery from "./companyGalery";
import VisionMission from "./visionMission";

const siteUrl = "https://solvein.id";

export const metadata: Metadata = {
  title: "About",
  description:
    "Solvein adalah digital agency Indonesia yang membantu brand bertumbuh melalui strategi terarah, eksekusi terintegrasi, dan hasil terukur.",
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
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About Solvein",
    description:
      "Solvein adalah digital agency Indonesia yang membantu brand bertumbuh melalui strategi terarah, eksekusi terintegrasi, dan hasil terukur.",
    url: `${siteUrl}/about`,
    images: ["/images/logo/og_image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Solvein",
    description:
      "Solvein adalah digital agency Indonesia yang membantu brand bertumbuh melalui strategi terarah, eksekusi terintegrasi, dan hasil terukur.",
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
