import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "hvdtmo58",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-04",
});

export default client;
