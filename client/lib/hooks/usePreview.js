import { filterDataToSingleItem, usePreviewSubscription } from "../sanity";

export function usePreview(data, initialData, preview) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData,
    enabled: preview,
  });

  return filterDataToSingleItem(previewData, preview);
}
