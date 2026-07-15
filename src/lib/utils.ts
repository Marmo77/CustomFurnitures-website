import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const navigateToAddigital = () => {
  window.open("https://www.addigital.pl", "_blank", "noopener,noreferrer");
};
