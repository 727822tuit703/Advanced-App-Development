import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Dashboard",
      path: "/dashboard"
    },
    {
      title: "Contact",
      path: "/contact"
    },
    {
      title: "Login",
      path: "/login"
    }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <h1 className="navbar-brand font-bold text-lg">
          Gift
          <span className="text-blue-500"></span>
        </h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {NavLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <NavLink
                  to={link.path}
                  className="nav-link text-gray-800"
                  activeClassName="text-blue-500"
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
