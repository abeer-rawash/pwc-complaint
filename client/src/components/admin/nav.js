import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    var value = false;
    if (window.localStorage.length > 0) {
      value = true;
    } else {
      value = false;
    }
    return (
      <div>
        <nav
          style={{ color: "red" }}
          className="navbar navbar-dark bg-dark navbar-expand-lg"
        >
          <Link to="/complaints" className="navbar-brand">
            ABC
          </Link>

          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/complaints" className="nav-link">
                  Complaints
                </Link>
              </li>
              <li className="navbar-item" onClick={logout}>
                <Link to="/logout" className="nav-link">
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
function logout() {
  window.localStorage.clear();
  window.location = "/loginA";
}
