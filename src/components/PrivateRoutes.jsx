import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-hot-toast";
import UserContext from "../context/UserContext";

const PrivateRoutes = () => {
  const { user } = useContext(UserContext);
  if (user?.isAdmin) {
    return <Outlet />;
  }
  toast(
    (t) => (
      <p>
        Heyy, you're not logged in as an admin. <br /> Login with{" "}
        <span className="text-primary">realdami</span> (username) and{" "}
        <span className="text-primary">realpassword</span> (password) to get
        admin access.
      </p>
    ),
    {
      duration: 6000,
    }
  );
  return <Navigate to="/login" />;
};

export default PrivateRoutes;
