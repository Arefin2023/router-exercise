import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./Pages/HomePage.jsx";
import { MoviesPage } from "./Pages/MoviesPage.jsx";
import { MovieDetailPage } from "./Pages/MovieDetailPage.jsx";
import { ActorsPage } from "./Pages/ActorsPage.jsx";
import { ActorsDetailPage } from "./Pages/ActorsDetailPage.jsx";
import { RootLayout } from "./Pages/RootLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/movies",

        children: [
          {
            index: true,
            element: <MoviesPage />,
          },
          {
            path: ":movieID",
            element: <MovieDetailPage />,
          },
        ],
      },

      {
        path: "/actors",
        children: [
          {
            index: true,
            element: <ActorsPage />,
          },
          {
            path: ":actorID",
            element: <ActorsDetailPage />,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
