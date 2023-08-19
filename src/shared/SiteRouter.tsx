import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout";
import NoMatch from "./NoMatch";
import Contact from "../features/contacts/Contact";
import ChartsMaps from "../features/charts-maps/ChartsMaps";

const SiteRouter = () => {
  const BrowserRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NoMatch />,
      children: [
        {
          index: true,
          element: <Navigate to="/contact" replace />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/charts-maps",
          element: <ChartsMaps />,
        },
      ],
    },
  ]);
  return <RouterProvider router={BrowserRoutes} />;
};

export default SiteRouter;
