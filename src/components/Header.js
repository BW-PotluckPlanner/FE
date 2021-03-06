import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


const Header = () => {

  const signOut = () => {
    localStorage.removeItem("token");
    // window.location.reload("/login");
  };

  const getToken = () => {
    return window.localStorage.getItem("userID")
}

  return (
    <div className="header">
      <a
        className="logo"
        href="#"
      >
        Potluck Planner
      </a>
      <nav className="nav-links">
        {window.localStorage.getItem("token") ? (
          <Link className="nav-link" to="/login" onClick={signOut}>
            Sign Out
          </Link>
        ) : (
          <Link className="nav-link" to="/login">
            Sign In
          </Link>
        )}
        {window.localStorage.getItem("token") ? null : (
          <Link className="nav-link" id="signup-btn" to="/register">
            Sign Up
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
