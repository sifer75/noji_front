import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import SectionCards from "./Pages/SectionCards.tsx";
import Homepage from "./Pages/Homepage.tsx";
import Edition from "./Pages/Edition.tsx";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage id="App__sectionContainer" />,
      },
      {
        path: "/section/:id",
        element: <SectionCards id="App__sectionCards" />,
      },
      {
        path: "/section/:id/edition",
        element: <Edition id="App__edition" />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
