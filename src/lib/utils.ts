import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatLabel(input: string): string {
  const customWords: Record<string, string> = {
    moq: "MOQ",
    fob: "FOB",
    cif: "CIF",
    cnf: "CNF",
    id: "ID",
  };

  return input
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(" ")
    .map((word) => {
      const lower = word.toLowerCase();
      return customWords[lower] || word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
