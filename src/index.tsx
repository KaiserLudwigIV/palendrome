import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	HashRouter,
} from "react-router-dom";
import { Palendrome } from "./Palendrome";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Kanye } from "./Kanye";
import { SudokuApp } from "./Sudoku/SudokuApp";

const Index = () => {
	return (
		<div
			style={{
				display: "grid",
				placeItems: "center",
				width: "100vw",
				height: "100vh",
			}}
		>
			<HashRouter>
				<Navbar />
				<Switch>
					<Route path="/Sudoku">
						<SudokuApp />
					</Route>
					<Route path="/Palendrome">
						<Palendrome />
					</Route>

					<Route path="/Kanye">
						<Kanye />
					</Route>

					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</HashRouter>
		</div>
	);
};

ReactDOM.render(<Index />, document.getElementById("root"));
