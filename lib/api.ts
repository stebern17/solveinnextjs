export const baseURL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:1337";

const REVALIDATE_12_HOURS = 43200; // 12 hours in seconds
const isServer = typeof window === "undefined";

const getApiKey = () => {
  if (isServer) {
    return process.env.API_KEY || process.env.NEXT_PUBLIC_API_KEY || "";
  }

  return process.env.NEXT_PUBLIC_API_KEY || "";
};

export async function fetchAPI(
  path: string,
  options?: RequestInit & { revalidate?: number; tags?: string[] },
) {
  const { revalidate, tags, ...fetchOptions } = options || {};
  const revalidateTime = revalidate ?? REVALIDATE_12_HOURS;
  const requestPath = path.startsWith("/") ? path : `/${path}`;
  const targetURL = isServer ? `${baseURL}${requestPath}` : `/api/proxy${requestPath}`;

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  if (isServer) {
    const apiKey = getApiKey();
    if (apiKey) {
      headers.set("X-API-KEY", apiKey);
    }
  }

  const incomingHeaders = new Headers(fetchOptions.headers);
  incomingHeaders.forEach((value, key) => {
    headers.set(key, value);
  });

  const res = await fetch(targetURL, {
    headers,
    next: { revalidate: revalidateTime, tags: tags || [] },
    ...fetchOptions,
  });

  if (!res.ok) {
    const errorText = await res.text();
    const details = errorText ? ` - ${errorText}` : "";
    console.error(
      `Failed to fetch API: ${res.status} ${res.statusText}${details}`,
    );
    throw new Error(
      `Failed to fetch API: ${res.status} ${res.statusText}${details}`,
    );
  }

  return res.json();
}
