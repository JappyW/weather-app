import "./navbar.scss";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top bg-dark">
        <Link className="navbar-brand ml-2" to="/">
          The best Weather App we ever made
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className=" navbar-items collapse navbar-collapse justify-content-end bg-dark"
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <span>Weather</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/settings" className="nav-link">
                <FontAwesomeIcon icon={faCog} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
