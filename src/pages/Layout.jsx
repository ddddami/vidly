import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NavBar from "../components/NavBar";
import { getUser } from "../services/userService";
import UserContext from "../context/UserContext";

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
    <UserContext.Provider value={{ user }}>
      <NavBar />
      <main className="container">
        <Toaster position="top-right" reverseOrder={true} />
        <Outlet />
      </main>
    </UserContext.Provider>
  );
};

export default Layout;
