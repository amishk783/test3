import { createClient } from "@sanity/client";
import dotenv from "dotenv";

dotenv.config()
export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-02-06",
});
