import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Matches from "../pages/Matches";
import Schedule from "../pages/Schedule";
import Series from "../pages/Series";
import LiveSeries from "../pages/Series/LiveSeries";
import Layout from "../layout/Layout";
import LiveScore from "../pages/LiveScore";
import SeriesInfo from "../pages/Series/SeriesInfo";
import Players from "../pages/Players/Players";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/players",
        element: <Players />,
      },
      {
        path: "/live-score",
        element: <LiveScore />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "/series",
        element: <Series />,
      },
      {
        path: "/matches",
        element: <Matches />,
      },
      {
        path: "/live-series",
        element: <LiveSeries />,
      },
      {
        path: "/live-series/:seriesId",
        element: <SeriesInfo />,
      },
    ],
  },
]);
const Router = () => {
  return <RouterProvider router={router} />;
};
export default Router;
