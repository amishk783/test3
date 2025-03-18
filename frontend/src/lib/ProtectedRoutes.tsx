import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { inProgress } = useMsal();
  console.log(import.meta.env.VITE_CLIENT_ID);
  const isAuthenticated = useIsAuthenticated();
  const location = useLocation();

  if (inProgress === "startup" || inProgress === "handleRedirect") {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};
