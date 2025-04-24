"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to homepage after a short delay (or immediately)
    router.replace("/");
  }, [router]);

  return null; // Or show a loading spinner if you like
}
