import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NavBar from "../components/NavBar";
import { getUser } from "../services/userService";

const Layout = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUser()
      .then((res) => {
        setUser(res.data);
      })
      .catch();
  }, []);
  return (
    <>
      <NavBar user={user} />
      <main className="container">
        <Toaster position="top-right" reverseOrder={true} />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
