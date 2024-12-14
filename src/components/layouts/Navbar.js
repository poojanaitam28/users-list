import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="p-2">
      <nav
        style={{ height: "90px" }}
        class="navbar navbar-expand-lg bg-body-tertiary"
      >
        <div class="container-fluid">
          <NavLink className="navbar-brand" to="/">
            React Users
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div style={{}} class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Link
          style={{ width: "120px", marginRight: "35px" }}
          to="/user/add"
          className="btn btn-outline-primary"
        >
          Add User
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
