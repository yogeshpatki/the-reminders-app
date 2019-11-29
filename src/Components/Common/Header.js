import React from "react";

// Router
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<NavLink to="/" className="navbar-brand">
				R3 Boilerplate
			</NavLink>

			<ul className="navbar-nav">
				<li className="nav-item">
					<NavLink className="nav-link" to="/">
						Component One
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/component2">
						Component Two
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
