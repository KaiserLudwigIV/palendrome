import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Navbar = (props: Props) => {
	return (
		<div className="navbar">
			<Link to="/Palendrome" className="link">
				Palendrome
			</Link>

			<Link to="/" className="link">
				Home
			</Link>

			<Link to="/Kanye" className="link">
				Kanye
			</Link>
			<Link to="/Sudoku" className="link">
				Sudoku
			</Link>
		</div>
	);
};

export { Navbar };
