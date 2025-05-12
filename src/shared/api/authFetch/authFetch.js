export const authFetch = (path, options) => {
  const headers = !options?.headers
    ? { "Content-type": "application/json" }
    : {};

  return fetch(`${import.meta.env.VITE_API_HOST_COMMON}/api` + path, {
    ...options,
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("key")}`,
      ...headers,
    },
  });
};
