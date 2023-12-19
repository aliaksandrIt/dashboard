import App from "./App";
import GlobalStyle from "./app/GlobalStyle";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard, ErrorPage, PurchasePage } from "./pages";
import { HomePage } from "./pages/HomePage";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root ins not defined");
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "purchase",
        element: <PurchasePage />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);

container.render(
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);
