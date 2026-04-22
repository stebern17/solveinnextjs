export const baseURL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:1337";

export async function fetchAPI(path: string, options?: RequestInit) {
  const res = await fetch(`${baseURL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    cache: "no-cache",
    ...options,
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
