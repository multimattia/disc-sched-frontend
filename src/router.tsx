import { createRouter } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { Route as rootRoute } from "./routes/__root.tsx";
import { routeTree } from "./routeTree.gen.ts";
import { NotFoundRoute } from "@tanstack/react-router";

const queryClient = new QueryClient();

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => "404 not found",
});

// Set up a Router instance
export const router = createRouter({
  routeTree,
  notFoundRoute,
  context: {
    auth: undefined as any,
    queryClient,
  },
  defaultPreload: "intent",
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
