import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Signup from "./pages/Signup.tsx";
import Login from "./pages/Login.tsx";
import Header from "@/components/common/Header.tsx";
import { Footer } from "./components/common/Footer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="">
        <Header />
        <div className="w-full ">
          <h1>Hello World</h1>
          <Link to="about">About Us</Link>
        </div>
        <Footer />
      </div>
    ),
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

    <App />
  </StrictMode>
);
