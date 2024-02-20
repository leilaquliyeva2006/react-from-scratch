import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
const rootContainer = document.querySelector("#root");

if (rootContainer === null) throw new Error("Can't find root container");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>
  },
]);

const root = createRoot(rootContainer);

root.render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
