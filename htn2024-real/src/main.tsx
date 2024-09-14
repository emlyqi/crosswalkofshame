import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "next-themes";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import App from "./App.tsx";
import "./index.css";
import GalleryPage from "./pages/GalleryPage";
import TestPage from "./pages/TestPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GalleryPage />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class">
      <ConvexProvider client={convex}>
        <RouterProvider router={router} />
        <App />
      </ConvexProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
