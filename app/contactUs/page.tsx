import type { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";

const siteUrl = "https://solvein.id";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Solvein to discuss brand strategy, digital marketing, creative design, and web development solutions.",
  keywords: [
    "contact Solvein",
    "digital agency contact",
    "brand strategy",
    "digital marketing",
    "web development",
    "creative design",
  ],
  alternates: {
    canonical: `${siteUrl}/contactUs`,
  },
  openGraph: {
    title: "Contact Solvein",
    description:
      "Get in touch with Solvein to solve your brand, marketing, design, or web challenges.",
    url: `${siteUrl}/contactUs`,
    images: ["/images/logo/og_image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Solvein",
    description:
      "Get in touch with Solvein to solve your brand, marketing, design, or web challenges.",
    images: ["/images/logo/og_image.png"],
  },
};

export default function ContactUsPage() {
  return <ContactUsClient />;
}
