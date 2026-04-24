import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

const siteUrl = "https://solvein.id";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Solvein services: brand strategy, digital marketing, creative design, and web development for modern businesses.",
  keywords: [
    "Solvein services",
    "brand strategy",
    "digital marketing",
    "creative design",
    "web development",
    "SEO",
  ],
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    title: "Solvein Services",
    description:
      "Brand strategy, digital marketing, creative design, and web development tailored to your business goals.",
    url: `${siteUrl}/services`,
    images: ["/images/logo/og_image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solvein Services",
    description:
      "Brand strategy, digital marketing, creative design, and web development tailored to your business goals.",
    images: ["/images/logo/og_image.png"],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
