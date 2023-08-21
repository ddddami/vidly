import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoutes;
