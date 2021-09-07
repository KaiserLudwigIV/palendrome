import React, { useState } from "react";
import { SettingsI, testIfLegit } from "../../logic";
import "./Settings.scss";
import { gameCopy } from "../PlayingField/PlayingField";

interface Props {
	setSettings: React.Dispatch<React.SetStateAction<SettingsI>>;
}

const Settings = (props: Props) => {
	const [gameSize, setGameSize] = useState<2 | 3>(3);
	const [difficulty, setDifficulty] = useState<1 | 2 | 3>(2);
	const [isSudokuSolved, setIsSudokuSolved] = useState<boolean | undefined>(
		undefined
	);

	return (
		<section id="Settings">
			<div className="SettingOption">
				<h1>
					{isSudokuSolved === undefined
						? "Not yet solved"
						: isSudokuSolved === true
						? "Sudoku solved!"
						: "Sudoku not solved!"}{" "}
				</h1>
				<h2>Set the game size</h2>
				<div id="GameSize">
					<h2
						style={{
							backgroundColor: gameSize === 2 ? "green" : "transparent",
						}}
						onClick={() => setGameSize(2)}
					>
						2x2
					</h2>
					<h2
						style={{
							backgroundColor: gameSize === 3 ? "green" : "transparent",
						}}
						onClick={() => setGameSize(3)}
					>
						3x3
					</h2>
				</div>
			</div>
			<div className="SettingOption">
				<h2>Set the game difficulty</h2>
				<div style={{ gap: ".5rem" }}>
					<button
						className="btn"
						style={{ backgroundColor: difficulty === 1 ? "green" : "#363636" }}
						onClick={() => setDifficulty(1)}
					>
						Easy
					</button>
					<button
						className="btn"
						style={{ backgroundColor: difficulty === 2 ? "green" : "#363636" }}
						onClick={() => setDifficulty(2)}
					>
						Medium
					</button>
					<button
						className="btn"
						style={{ backgroundColor: difficulty === 3 ? "green" : "#363636" }}
						onClick={() => setDifficulty(3)}
					>
						Hard
					</button>
				</div>
			</div>
			<div className="SettingOption">
				<button
					onClick={() => {
						props.setSettings({
							size: gameSize,
							difficulty: difficulty,
						});
						setIsSudokuSolved(undefined);
					}}
				>
					Start Game
				</button>
			</div>
			<div className="SettingOption">
				<button
					onClick={() => setIsSudokuSolved(testIfLegit(gameCopy, gameSize))}
				>
					Test if works
				</button>
			</div>
		</section>
	);
};

export { Settings };
