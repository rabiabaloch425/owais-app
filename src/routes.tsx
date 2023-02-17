import { RouteObject } from "react-router-dom";
import Dashboard from "./pages/dashboard";

const routes: RouteObject[] = [
  {
    path: "/",
    index: true,
    element: <Dashboard />,
  },
];

export default routes;
