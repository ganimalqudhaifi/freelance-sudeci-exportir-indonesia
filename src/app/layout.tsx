import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationHeader from "@/components/navigation-header";
import ContactSection from "@/components/contact-section";
import Copyright from "@/components/copyright";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sudeciexportirindonesia.com"),
  title: {
    default: "PT. SUDECI EXPORTIR INDONESIA",
    template: "%s | PT. SUDECI EXPORTIR INDONESIA",
  },
  description:
    "Menghubungkan Pasar Lokal dengan Dunia Internasional. PT. SUDECI EXPORTIR INDONESIA adalah perusahaan eksportir terpercaya yang menyediakan produk berkualitas tinggi dari Indonesia ke pasar global.",
  keywords: [
    "PT SUDECI EXPORTIR INDONESIA",
    "eksportir Indonesia",
    "jual kemiri ekspor",
    "benur lobster",
    "daun pisang ekspor",
    "briket arang ekspor",
    "perusahaan ekspor terpercaya",
    "produk Indonesia ke luar negeri",
  ],
  openGraph: {
    title: "PT. SUDECI EXPORTIR INDONESIA",
    description:
      "Perusahaan eksportir terpercaya yang menghubungkan pasar lokal dengan dunia internasional.",
    url: "https://sudeciexportirindonesia.com",
    siteName: "PT. SUDECI EXPORTIR INDONESIA",
    images: [
      {
        url: "/og-image.jpg", // Ganti dengan path og:image kamu
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
      "Perusahaan eksportir terpercaya yang menghubungkan pasar lokal dengan dunia internasional.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://sudeciexportirindonesia.com",
    languages: {
      "en-US": "/en",
      "id-ID": "/id",
    },
  },
  authors: [{ name: "PT. SUDECI EXPORTIR INDONESIA" }],
  creator: "PT. SUDECI EXPORTIR INDONESIA",
  publisher: "PT. SUDECI EXPORTIR INDONESIA",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationHeader />
        {children}
        <ContactSection />
        <Copyright />
      </body>
    </html>
  );
}
