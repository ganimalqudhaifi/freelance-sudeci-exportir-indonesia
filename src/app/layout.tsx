import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageWrapper from "@/components/page-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sudeciexportir.id"),
  title: {
    default: "PT. SUDECI EXPORTIR INDONESIA",
    template: "%s | PT. SUDECI EXPORTIR INDONESIA",
  },
  description:
    "Connecting local Indonesian products to the global market. PT. SUDECI EXPORTIR INDONESIA is a trusted export company delivering high-quality commodities such as candlenuts, charcoal briquettes, lobster seeds, and banana leaves.",
  keywords: [
    "Indonesian exporter",
    "export candlenut",
    "charcoal briquette supplier",
    "lobster seed export",
    "banana leaves export",
    "PT SUDECI EXPORTIR INDONESIA",
    "trusted export company",
    "Indonesian export products",
  ],
  openGraph: {
    title: "PT. SUDECI EXPORTIR INDONESIA",
    description:
      "A trusted export company connecting local Indonesian commodities with the international market.",
    url: "https://sudeciexportir.id",
    siteName: "PT. SUDECI EXPORTIR INDONESIA",
    images: [
      {
        url: "/og-image.jpg", // Should be 1200x630, well-optimized
        width: 1200,
        height: 630,
        alt: "PT. SUDECI EXPORTIR INDONESIA",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT. SUDECI EXPORTIR INDONESIA",
    description:
      "Exporting Indonesia's finest natural products to the world market.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://sudeciexportir.id",
  },
  authors: [{ name: "PT. SUDECI EXPORTIR INDONESIA" }],
  creator: "PT. SUDECI EXPORTIR INDONESIA",
  publisher: "PT. SUDECI EXPORTIR INDONESIA",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
