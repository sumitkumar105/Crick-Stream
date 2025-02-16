export default function useBaseUrl() {
  const baseUrl: string = import.meta.env.VITE_BASE_URL;
  const Key: string = import.meta.env.VITE_API_KEY;

  return { baseUrl, Key };
}
