import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<nav className="Navbar">
			<NavLink to="/Home" className="nav-item">
				Home
			</NavLink>
			<NavLink to="/About" className="nav-item">
				About
			</NavLink>
			<NavLink to="/Donors" className="nav-item">
				Donors
			</NavLink>
			<NavLink to="/Donate" className="nav-item">
				Donate
			</NavLink>
		</nav>
	);
}

export default Navbar;
