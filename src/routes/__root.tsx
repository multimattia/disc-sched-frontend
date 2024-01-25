import { Link, Outlet, rootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useAuth } from "@clerk/clerk-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

interface Context {
  auth: ReturnType<typeof useAuth>;
  queryClient: QueryClient;
}

export const Route = rootRouteWithContext<Context>()({
  component: RootComponent,
});

function RootComponent() {
  const { isSignedIn } = useAuth();
  return (
    <>
      <nav className="flex max-w-screen-lg mx-auto justify-between items-center">
        <ul className="p-2 flex gap-2 text-lg my-7">
          <Link
            to="/"
            activeProps={{
              className: "font-bold",
            }}
            activeOptions={{ exact: true }}
          >
            <li className="min-w-20">Home</li>
          </Link>{" "}
          <Link
            to={"/about"}
            activeProps={{
              className: "font-bold",
            }}
          >
            <li className="min-w-20">About</li>
          </Link>
          <Link
            to={"/test"}
            activeProps={{
              className: "font-bold",
            }}
          >
            <li className="min-w-20">Test</li>
          </Link>
        </ul>
        <Link
          to={"/test"}
          activeProps={{
            className: "font-bold",
          }}
        >
          <SignedIn>
            <UserButton afterSignOutUrl="/sign-in" />
          </SignedIn>
          <SignedOut>
            <Link to="/sign-in">Sign In</Link>
          </SignedOut>
        </Link>
      </nav>
      <div className="max-w-2xl m-auto">
        <Outlet />
      </div>
      <ReactQueryDevtools buttonPosition="top-right" />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
