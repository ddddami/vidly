import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import { logout } from "../services/authService";

const NavBar = () => {
  const { user } = useContext(UserContext);
  const handleLogout = () => {
    logout();
    window.location = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Vidly
        </Link>

        <button
          className="navbar-toggler outline"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/movies" className="nav-link">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/customers" className="nav-link">
                Customers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/rentals" className="nav-link">
                Rentals
              </NavLink>
            </li>

            <li className="nav-item">
              {user ? (
                <p className="nav-link mb-0">{user.name}</p>
              ) : (
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              )}
            </li>
            <li className="nav-item">
              {user ? (
                <NavLink onClick={handleLogout} className="nav-link">
                  Logout
                </NavLink>
              ) : (
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
