import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppRoutes } from "./Routes.jsx";

if (!("theme" in localStorage)) {
  localStorage.theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>{AppRoutes}</React.StrictMode>
);
