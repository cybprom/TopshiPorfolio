import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import imageUrlBuilder from "@sanity/image-url";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
