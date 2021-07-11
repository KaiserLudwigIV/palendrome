import React, { useState } from "react";

interface Props {}

const Palendrome = (props: Props) => {
	const [pal, setpal] = useState<boolean>(false);

	function testPal(evt: string) {
		const testVar: string = evt.toLowerCase().split("").reverse().join("");
		evt.toLowerCase() == testVar && testVar.length > 2
			? setpal(true)
			: setpal(false);
	}

	return (
		<div className="container">
			<h1 style={{ textAlign: "center" }}>Palendrome Search</h1>
			<p>
				Type something in the inputfield to see if your word or sentence is a
				palendrome!
			</p>
			<input
				id="palInput"
				type="text"
				onChange={(e) => testPal(e.target.value)}
			/>
			<h1 style={{ color: pal ? "green" : "red" }}>
				This is {pal ? "" : "not"} a palendrome
			</h1>
		</div>
	);
};

export { Palendrome };
