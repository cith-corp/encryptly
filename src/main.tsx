import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import "./index.css";
import App from "./App";
import { RouterProvider, createHashRouter } from "react-router";


import "@radix-ui/themes/styles.css";
import PrivacyPolicy from "./PrivacyPolicy";
import Imprint from "./Imprint";

let router = createHashRouter([
  {
    path: "/",
    Component: App
  },
  {
    path: "/privacy",
    Component: PrivacyPolicy
  },
  {
    path: "/imprint",
    Component: Imprint
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme appearance="dark">
      <RouterProvider router={router}/>
    </Theme>
  </StrictMode>
);
