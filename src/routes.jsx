import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Movies from "./components/Movies";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import MovieForm from "./components/MovieForm";
import ErrorPage from "./pages/ErrorPage";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import PrivateRoutes from "./components/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/movies" /> },
      { path: "/movies", element: <Movies /> },
      { path: "/customers", element: <Customers /> },
      { path: "/rentals", element: <Rentals /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/register", element: <RegisterForm /> },
      {
        element: <PrivateRoutes />,
        children: [{ path: "/movies/:id", element: <MovieForm /> }],
      },
    ],
  },
]);

export default router;
