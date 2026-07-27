import { fetchClient } from "../utils/fetchClient.js";
import { config } from "../config/env.js";

export async function fetchMediumRSS(): Promise<string> {
  const response = await fetchClient(
    config.medium.rssUrl,
    {
      headers: {
        "User-Agent": config.medium.userAgent,
      },
    },
    config.medium.timeoutMs,
    1
  );

  if (!response.ok) {
    throw new Error(`Medium RSS fetch failed with status: ${response.status}`);
  }

  return response.text();
}