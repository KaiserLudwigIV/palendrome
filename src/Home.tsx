import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Home = (props: Props) => {
	return (
		<div className="container">
			<h1>Hi!</h1>
			<h2>My name is Max and this is stuff.</h2>
			<h3>Just take a look at the navbar. There is a lot of stuff right?</h3>
			<Link
				to="/Palendrome"
				className="link"
				style={{ border: "2px solid #fff", padding: ".5rem 1rem" }}
			>
				Visit Palendrome Stuff
			</Link>
		</div>
	);
};

export { Home };
