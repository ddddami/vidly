import React from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
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
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
