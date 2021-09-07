import React, { useState, useEffect, useRef } from "react";
import { gameCopy } from "../PlayingField/PlayingField";

interface Props {
	inputValue: number | undefined;
	fIndex: number;
	sIndex: number;
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
		if (value === undefined) {
			gameCopy[props.fIndex][props.sIndex].value = undefined;
		}
	}, []);

	return (
		<input
			ref={thisInput}
			key={Math.random() * 1000}
			className="gameInput"
			value={value}
			onChange={() => true}
			onKeyPress={(evt) => {
				if (!/[1-9]/.test(evt.key) || props.inputValue !== undefined) {
					evt.preventDefault();
				} else {
					setValue(parseInt(evt.key));
					gameCopy[props.fIndex][props.sIndex].value = parseInt(evt.key);
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
