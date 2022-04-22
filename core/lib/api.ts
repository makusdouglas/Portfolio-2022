import swr from "swr";
const fetcher = (req: RequestInfo, init?: RequestInit) =>
  fetch(req, init).then((res) => res.json());

export async function fetchApi<T>(url: string) {
  return swr<T>(url, fetcher);
}

export async function Api<T>(
  fullUrl: string,
  options?: RequestInit,
  method?: string
) {
  const res = await fetch(fullUrl, {
    method: method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    body: options?.body ? JSON.stringify(options?.body) : null,
    ...options,
  });

  const json: T = await res.json();
  return json;
}

export type IApi = typeof Api;
