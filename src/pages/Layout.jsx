import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="container">
        <Toaster position="top-right" reverseOrder={true} />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
