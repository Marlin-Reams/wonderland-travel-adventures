import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./result.png";
import "./Navbar.css";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="logo-div">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="navbar-brand logo-text">
          Wonderland Travel Adventures
        </div>
        <button
          className={`navbar-toggler ${isCollapsed ? "collapsed" : ""}`}
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={toggleNavbar}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/plan-a-trip"
                className="nav-link"
                onClick={toggleNavbar}
              >
                Plan a Trip
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/questions" className="nav-link" onClick={toggleNavbar}>
                Questions
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-me" className="nav-link" onClick={toggleNavbar}>
                About Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// };

// export default Navbar;
