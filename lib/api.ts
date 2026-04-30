export const baseURL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:1337";

const REVALIDATE_12_HOURS = 43200; // 12 hours in seconds

export async function fetchAPI(
  path: string,
  options?: RequestInit & { revalidate?: number },
) {
  const { revalidate, ...fetchOptions } = options || {};
  const revalidateTime = revalidate ?? REVALIDATE_12_HOURS;

  const res = await fetch(`${baseURL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    next: { revalidate: revalidateTime },
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
