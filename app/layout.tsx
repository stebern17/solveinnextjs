import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Noise from "@/components/ui/noise/Noise";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import SmoothScroll from "@/components/effects/SmoothScroll";
import IntroLoader from "@/components/layouts/introLoader";

const DmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://solvein.id"),

  title: {
    default: "Solvein Digital & Creative Agency",
    template: "%s | Solvein Digital & Creative Agency",
  },

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

  authors: [{ name: "Solvein Team" }],
  creator: "Solvein",
  applicationName: "Solvein Digital & Creative Agency",
  referrer: "origin-when-cross-origin",

  openGraph: {
    title: "Solvein Digital & Creative Agency",
    description:
      "Solvein adalah digital agency Indonesia yang membantu brand bertumbuh melalui strategi terarah, eksekusi terintegrasi, dan hasil yang terukur.",
    url: "https://solvein.id",
    siteName: "Solvein Digital & Creative Agency",
    images: [
      {
        url: "/images/logo/og_image.png",
        width: 1200,
        height: 342,
        alt: "Solvein Digital & Creative Agency",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  manifest: "/site.webmanifest",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "Solvein Digital & Creative Agency",
    description:
      "Solvein adalah digital agency Indonesia yang membantu brand bertumbuh melalui strategi terarah, eksekusi terintegrasi, dan hasil yang terukur.",
    images: ["/images/logo/og_image.png"],
  },

  alternates: {
    canonical: "https://solvein.id",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },

  category: "Brand Creative & Digital Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${DmSans.variable} antialiased`}>
        <Header />
        <IntroLoader />
        <Noise />
        <main className="relative z-10 min-h-screen">
          <SmoothScroll />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
