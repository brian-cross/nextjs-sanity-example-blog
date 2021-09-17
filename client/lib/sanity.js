import { createImageUrlBuilder } from "next-sanity";
import { config } from "./config";

export const urlForImage = source =>
  createImageUrlBuilder(config).image(source).auto("format").fit("max");
