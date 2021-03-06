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
          style={{ color: "red", paddingLeft: "30px", height: "70px" }}
          className="navbar navbar-dark bg-dark navbar-expand-lg"
        >
          <Link to="/home" className="navbar-brand">
            <li
              className="navbar-item"
              style={{
                fontSize: "40px",
                listStyle: "none",
              }}
            >
              ABC
            </li>
          </Link>

          <div className="collpase navbar-collapse">
            <ul
              style={{
                marginLeft: "1000px",
              }}
              className="navbar-nav mr-auto"
            >
              <li
                style={{
                  fontSize: "20px",
                  paddingRight: "10px",
                }}
                className="navbar-item"
              >
                <Link to="/addcomp" className="nav-link">
                  Add Complaint
                </Link>
              </li>
              <li
                style={{
                  fontSize: "20px",
                  paddingRight: "10px",
                }}
                className="navbar-item"
              >
                <Link to="/complaintsId" className="nav-link">
                  Profile
                </Link>
              </li>
              <li
                style={{
                  fontSize: "20px",
                  paddingRight: "10px",
                }}
                className="navbar-item"
                onClick={logout}
              >
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
  window.location = "/loginC";
}
