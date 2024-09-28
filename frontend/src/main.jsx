import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-5xl">Hello world!</div>,
  },
  {
    path: "/addCoffee/",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee/",
    element: <UpdateCoffee></UpdateCoffee>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
