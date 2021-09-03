import React, { useState, useEffect, useRef } from "react";

interface Props {
	inputValue: number | undefined;
}

const Field = (props: Props) => {
	const thisInput = useRef(null);
	const [value, setValue] = useState<number | undefined>(props.inputValue);
	useEffect(() => {
		//@ts-ignore
		thisInput.current.focus();
	}, [value]);
	useEffect(() => {
		//@ts-ignore
		thisInput.current.blur();
	}, []);

	return (
		<input
			ref={thisInput}
			key={Math.random() * 1000}
			className="gameInput"
			value={value}
			onKeyPress={(evt) => {
				if (!/[1-9]/.test(evt.key) || props.inputValue !== undefined) {
					evt.preventDefault();
				} else {
					setValue(parseInt(evt.key));
				}
			}}
			onFocus={(evt) => {
				let value = evt.currentTarget.value;
				evt.currentTarget.value = "";
				evt.currentTarget.value = value;
			}}
			style={{
				backgroundColor:
					props.inputValue != undefined
						? "rgb(120,120,120)"
						: "rgb(221, 221, 221)",
			}}
		/>
	);
};

export { Field };
