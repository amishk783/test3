import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "n2uf052o",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-02-06",
});
