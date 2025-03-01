import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup.tsx";
import Login from "./pages/Login.tsx";

import Layout from "./Layout.tsx";
import Contact from "./pages/Contact.tsx";
import Settings from "./pages/Settings/index.tsx";
import { Article } from "./pages/Article/index.tsx";
import { NotFound } from "./pages/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },

      { path: "settings", element: <Settings /> },
      { path: "contactus", element: <Contact /> },
      { path: "articles/:id", element: <Article /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
