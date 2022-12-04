import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState((p) => !p);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark mb-4"
      aria-label="Tenth navbar example"
    >
      <div className="container-fluid">
        <button
          className={`navbar-toggler ${state ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample08"
          aria-controls="navbarsExample08"
          aria-expanded={state}
          aria-label="Toggle navigation"
          onClick={handleClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-md-center ${
            state ? "show" : ""
          }`}
          id="navbarsExample08"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Welcome to my REACT project
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link btn btn-outline-primary">
                to go back
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

/**
 * <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Centered nav only</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
 */
