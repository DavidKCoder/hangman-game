import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../error-page";
import StartGame from "../components/StartGame";
import MainPage from "../components/MainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/start/game",
    element: <StartGame/>,
    errorElement: <ErrorPage/>,
  },
]);