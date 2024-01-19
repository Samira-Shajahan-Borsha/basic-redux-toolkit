import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import NotFound from "../page/NotFound";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
