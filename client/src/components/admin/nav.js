import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          style={{ color: "red", paddingLeft: "30px", height: "70px" }}
          className="navbar navbar-dark bg-dark navbar-expand-lg"
        >
          <Link to="/complaints" className="navbar-brand">
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
                  paddingRight: "40px",
                }}
                className="navbar-item"
              >
                <Link to="/complaints" className="nav-link">
                  Complaints
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
      // <div>
      //   <nav
      //     style={{ color: "red" }}
      //     className="navbar navbar-dark bg-dark navbar-expand-lg"
      //   >
      //     <Link to="/complaints" className="navbar-brand">
      //       ABC
      //     </Link>

      //     <div className="collpase navbar-collapse">
      //       <ul className="navbar-nav mr-auto">
      //         <li className="navbar-item">
      //           <Link to="/complaints" className="nav-link">
      //             Complaints
      //           </Link>
      //         </li>
      //         <li className="navbar-item" onClick={logout}>
      //           <Link to="/logout" className="nav-link">
      //             Log out
      //           </Link>
      //         </li>
      //       </ul>
      //     </div>
      //   </nav>
      // </div>
    );
  }
}
function logout() {
  window.localStorage.clear();
  window.location = "/loginA";
}
