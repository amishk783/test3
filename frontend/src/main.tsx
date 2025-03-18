import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";

import Signup from "./pages/Signup.tsx";
import Login from "./pages/Login.tsx";

import Layout from "./Layout.tsx";
import Contact from "./pages/Contact.tsx";
import Settings from "./pages/Settings/index.tsx";
import { Article } from "./pages/Article/index.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./lib/authConfig.ts";
import { ProtectedRoutes } from "./lib/ProtectedRoutes.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "contactus", element: <Contact /> },
      { path: "*", element: <NotFound /> },
      {
        element: <ProtectedRoutes />,
        children: [
          { path: "settings", element: <Settings /> },
          { path: "articles/:id", element: <Article /> },
        ],
      },
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
export const msalInstance = new PublicClientApplication(msalConfig);


(async() => {
  await msalInstance.initialize();
})()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MsalProvider instance={msalInstance}>
      <RouterProvider router={router}></RouterProvider>
    </MsalProvider>
  </StrictMode>
);
