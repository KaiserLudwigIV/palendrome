import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

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
			<App />
		</div>
	);
};

ReactDOM.render(<Index />, document.getElementById("root"));
