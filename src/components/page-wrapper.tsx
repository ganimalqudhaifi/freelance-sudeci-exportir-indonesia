"use client";

import NavigationHeader from "@/components/navigation-header";
import ContactSection from "@/components/contact-section";
import Copyright from "@/components/copyright";
import WhatsappCTA from "@/components/whatsapp-cta";
import { usePathname } from "next/navigation";

export default function PageWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isNotFoundPage = pathname === "/404";

  return (
    <>
      {!isNotFoundPage && <NavigationHeader />}
      {children}
      {!isNotFoundPage && <ContactSection />}
      {!isNotFoundPage && <Copyright />}
      {!isNotFoundPage && <WhatsappCTA />}
    </>
  );
}
