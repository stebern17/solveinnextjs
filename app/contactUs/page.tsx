import type { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";

const siteUrl = "https://solvein.id";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hubungi Solvein, digital agency Indonesia, untuk konsultasi strategi, branding, dan digital marketing guna mendukung pertumbuhan bisnis Anda.",
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
    canonical: `${siteUrl}/contactUs`,
  },
  openGraph: {
    title: "Contact Solvein",
    description:
      "Hubungi Solvein, digital agency Indonesia, untuk konsultasi strategi, branding, dan digital marketing guna mendukung pertumbuhan bisnis Anda.",
    url: `${siteUrl}/contactUs`,
    images: ["/images/logo/og_image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Solvein",
    description:
      "Hubungi Solvein, digital agency Indonesia, untuk konsultasi strategi, branding, dan digital marketing guna mendukung pertumbuhan bisnis Anda.",
    images: ["/images/logo/og_image.png"],
  },
};

export default function ContactUsPage() {
  return <ContactUsClient />;
}
