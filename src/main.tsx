import { NotFoundRoute, Router, RouterProvider } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import NotFound from "./components/notfound";
import './index.css';
import { routeTree } from "./routeTree.gen";
import { Route as rootRoute } from "./routes/__root";

// Missing page route
const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => <NotFound/>,
});


// Set up a Router instance
const router = new Router({
  routeTree,
  notFoundRoute,
  defaultPreload: "intent",
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RouterProvider router={router} />);
}
