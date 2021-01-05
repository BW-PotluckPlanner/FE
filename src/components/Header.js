import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Header = () => {

  const signOut = () => {
    localStorage.removeItem("token");
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
        <h1>Potluck Planner</h1>
      </a>
      <nav className="nav-links">
        {window.localStorage.getItem("token") ? (
          <Link className="nav-link" to="/">
            Dashboard
          </Link>
        ) : null}
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