import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <Link to="/home">Home</Link>
        <div className="dropdown">
          <button className="dropbtn">Dashboards</button>
          <div className="dropdown-content">
            <Link to="/GSWS">GSWS</Link>
            <Link to="/resurvey">Re-survey</Link>
            <Link to="/medicaldepartment">Medical Department</Link>
          </div>
        </div>
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
