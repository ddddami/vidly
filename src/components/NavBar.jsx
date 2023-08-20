import React from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="px-2 navbar-brand">
        Vidly
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/movies" className="px-2 nav-link">
              Movies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/customers" className="px-2 nav-link">
              Customers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/rentals" className="px-2 nav-link">
              Rentals
            </NavLink>
          </li>
          <li className="nav-item">
            {user ? (
              <NavLink to="/logout" className="px-2 nav-link">
                Logout
              </NavLink>
            ) : (
              <NavLink to="/login" className="px-2 nav-link">
                Login
              </NavLink>
            )}
          </li>
          <li className="nav-item">
            {user ? (
              <p className="px-2 nav-link">{user.name}</p>
            ) : (
              <NavLink to="/register" className="px-2 m-0 nav-link">
                Register
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
