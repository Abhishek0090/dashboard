import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Auth from "./pages/auth";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Auth />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
  