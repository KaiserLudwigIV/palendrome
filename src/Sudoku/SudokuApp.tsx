import React, { useState } from "react";
import { PlayingField } from "./components/PlayingField/PlayingField";
import { Settings } from "./components/Settings/Settings";
import "./logic";
import { SettingsI } from "./logic";
import "./globalStyle.scss";

const SudokuApp = () => {
	const [gameSettings, setGameSettings] = useState<SettingsI>({
		size: 3,
		difficulty: 2,
	});
	return (
		<div id="GameContainer">
			<h1>Sudoku</h1>
			<PlayingField settings={gameSettings} />
			<Settings setSettings={setGameSettings} />
		</div>
	);
};

export { SudokuApp };
