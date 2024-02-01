import React from "react";
import { router } from "./router";
import ThemeToggle from "./components/ThemeToggle";
import { RouterProvider } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <ThemeToggle/>
      <RouterProvider router={router}/>
    </div>
  );
}