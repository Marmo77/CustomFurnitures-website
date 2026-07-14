import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const navigateToAddigital = () => {
  window.open("https://addigital.vercel.app/", "_blank", "noopener,noreferrer");
};
