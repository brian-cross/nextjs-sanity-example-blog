import {
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
} from "next-sanity";
import { config } from "./config";

export const urlForImage = source =>
  createImageUrlBuilder(config).image(source).auto("format").fit("max");

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export function filterDataToSingleItem(data, preview) {
  if (!Array.isArray(data)) return data;

  return data.length > 1 && preview
    ? data.filter(item => item._id.startsWith(`drafts.`)).slice(-1)[0]
    : data.slice(-1)[0];
}
