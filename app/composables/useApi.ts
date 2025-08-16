export const useApi = () => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBase;

  const get = <T>(url: string, opts: any = {}) =>
    $fetch<T>(url, { baseURL, ...opts });

  const post = <T>(url: string, body: any, opts: any = {}) =>
    $fetch<T>(url, { method: "POST", body, baseURL, ...opts });

  const del = <T>(url: string, opts: any = {}) =>
    $fetch<T>(url, { method: "DELETE", baseURL, ...opts });

  return { get, post, del };
};
