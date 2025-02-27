import React, { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { useNavigate, Outlet } from "react-router-dom";

const GuestMiddleware = () => {
  const authInfo = useAuthStore((state) => state.authInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (authInfo && Object.keys(authInfo).length > 0) {
      navigate("/admin"); // ✅ Redirect logged-in users to dashboard
    }
  }, [authInfo, navigate]);

  if (authInfo && Object.keys(authInfo).length > 0) {
    return null; // Prevents rendering before redirection
  }

  return <Outlet />; // ✅ Allows the route to be displayed for guests
};

export default GuestMiddleware;
