import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Movies from "./components/Movies";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import MovieForm from "./components/MovieForm";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/movies" /> },
      { path: "/movies", element: <Movies /> },
      { path: "/movies/:id", element: <MovieForm /> },
      { path: "/customers", element: <Customers /> },
      { path: "/rentals", element: <Rentals /> },
    ],
  },
]);

export default router;
