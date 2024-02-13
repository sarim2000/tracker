import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Error } from "../pages";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return <Error/>
  },
});

function RootComponent() {
  return (
    <>    
      <Outlet />
      {/* Start rendering router matches */}
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
