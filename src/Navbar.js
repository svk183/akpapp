import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <button className="dropbtn">Dashboards</button>
          <div className="dropdown-content">
            <Link to="/GSWS">GSWS</Link>
            <Link to="/resurvey">Re-survey</Link>
            <Link to="/medicaldepartment">Medical Department</Link>
          </div>
        </div>
        <Link to="/contact">Contact</Link>
        <div>
          <button
            style={{
              position: "absolute",
              right: 0,
              borderRadius: 20,
              padding: 10,
              width: 90,
              marginRight: 30,
              backgroundColor: "#b1cf86",
            }}
          >
            Log Out
          </button>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Navbar;
