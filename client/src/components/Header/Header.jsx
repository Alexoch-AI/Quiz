import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-link active" aria-current="page">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
                </Link>
            </li>
            <li className="nav-link active" aria-current="page">
              <Link className="nav-link active" aria-current="page" to="/login" >
                Login
                </Link>
            </li>
            <li className="nav-link active" aria-current="page">
              <Link className="nav-link active" aria-current="page" to="/registration" >
                Registration
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
