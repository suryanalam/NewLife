import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

function Header() {
	return (
		<section className="header-bg">
			<section className="header">
				<section className="header-left">
					<h1 className="header-title">
						New<span className="title-span">Life.</span>
					</h1>
				</section>

				<section className="header-right">
					<Navbar />
				</section>
			</section>
		</section>
	);
}

export default Header;
