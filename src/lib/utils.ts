import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  if (!dateString) return "";
  const match = dateString.match(/\b\d{4}\b/);
  if (match) {
    return match[0];
  }
  const d = new Date(dateString);
  if (!isNaN(d.getFullYear())) {
    return d.getFullYear().toString();
  }
  return dateString;
}
