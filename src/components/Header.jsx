import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Link } from "react-router-dom";
import auth from "../firebase.init";

const Header = () => {
  const [user, loading, errorHook] = useAuthState(auth);
  return (
    <header className="header_wrapper">
      <nav className="navbar navbar-expand-lg bg-white fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-black" to="/">
            Beanmi
          </Link>
          <button
            className="navbar-toggler pe-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <i className="fas fa-stream navbar-toggler-icon"></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav menu-navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item text-center">
                {user?.email ? (
                  <Link
                    className="nav-link learn-more-btn btn-extra-header"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    className="nav-link learn-more-btn btn-extra-header"
                    to="/course"
                  >
                    Enroll
                  </Link>
                )}
              </li>
              <li className="nav-item text-center">
                {user?.email ? (
                  <Link className="nav-link learn-more-btn" to="/profile">
                    Profile
                  </Link>
                ) : (
                  <Link className="nav-link learn-more-btn" to="/login">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
