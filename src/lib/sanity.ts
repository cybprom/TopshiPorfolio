import createImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2022-08-21",
  useCdn: process.env.NODE_ENV === "production",
};

export const client = createClient(config);

export const urlfor = (source: any) =>
  createImageUrlBuilder(config).image(source);
