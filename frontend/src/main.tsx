import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";
import Signup from "./pages/Signup.tsx";
import Login from "./pages/Login.tsx";

import Layout from "./Layout.tsx";
import Contact from "./pages/Contact.tsx";
import Settings from "./pages/Settings/index.tsx";
import { Article } from "./pages/Article/index.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { MsalProvider } from "@azure/msal-react";
import {
  AuthenticationResult,
  EventMessage,
  EventType,
  PublicClientApplication,
} from "@azure/msal-browser";
import { msalConfig } from "./lib/authConfig.ts";
import { ProtectedRoutes } from "./lib/ProtectedRoutes.tsx";
import { PaywallProvider } from "./store/PaywallProvider.tsx";

export const msalInstance = new PublicClientApplication(msalConfig);

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

msalInstance.initialize().then(() => {
  // Account selection logic is app dependent. Adjust as needed for different use cases.
  const accounts = msalInstance.getAllAccounts();
  if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0]);
  }

  msalInstance.addEventCallback((event: EventMessage) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
      const payload = event.payload as AuthenticationResult;
      const account = payload.account;
      msalInstance.setActiveAccount(account);
    }
  });

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <MsalProvider instance={msalInstance}>
        <PaywallProvider>
          <RouterProvider router={router}></RouterProvider>
        </PaywallProvider>
        <Toaster />
      </MsalProvider>
    </StrictMode>
  );
});
