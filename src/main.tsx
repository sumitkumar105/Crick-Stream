import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.tsx";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // cacheTime: 60 * 60 * 1000, // 1 hour
      staleTime: 30 * 60 * 1000, // 30 minutes
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
