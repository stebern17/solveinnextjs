import type { Metadata } from "next";
import { Suspense } from "react";
import ServicesClient from "./ServicesClient";

const siteUrl = "https://solvein.id";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Jasa digital agency Indonesia dengan layanan strategi, branding, website, hingga digital marketing terintegrasi untuk membantu bisnis Anda berkembang.",
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
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    title: "Solvein Services",
    description:
      "Jasa digital agency Indonesia dengan layanan strategi, branding, website, hingga digital marketing terintegrasi untuk membantu bisnis Anda berkembang.",
    url: `${siteUrl}/services`,
    images: ["/images/logo/og_image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solvein Services",
    description:
      "Jasa digital agency Indonesia dengan layanan strategi, branding, website, hingga digital marketing terintegrasi untuk membantu bisnis Anda berkembang.",
    images: ["/images/logo/og_image.png"],
  },
};

export default function ServicesPage() {
  return (
    <Suspense fallback={null}>
      <ServicesClient />
    </Suspense>
  );
}
