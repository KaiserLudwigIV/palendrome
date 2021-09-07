export interface sudokuField {
	x: number;
	y: number;
	value: number | undefined;
}

export interface SettingsI {
	size: number;
	difficulty: number;
}

export const getGame = (size: number, difficulty: number): sudokuField[][] => {
	let result: sudokuField[][] = [];
	let i = 0;

	while (i < size ** 2) {
		let createdSection: sudokuField[] = [];
		let retryCount = 0;
		let isOkSection = false;
		//if we don't find a solution in 10 tries, we should redo all sections
		while (!isOkSection && retryCount < 20) {
			createdSection = createSection(i, size, result, difficulty);

			//if we don't find any 0 values, section is valid
			if (!createdSection.find((val) => val.value === 0)) {
				isOkSection = true;
			}
			retryCount++;
		}

		if (isOkSection) {
			result[i] = createdSection;
			i++;
		} else {
			//we redo all sections
			result = [];
			i = 0;
		}
	}
	return result;
};

const createSection = (
	sectionNo: number,
	size: number,
	createdSections: sudokuField[][],
	difficulty: number
): sudokuField[] => {
	const sectionResult: sudokuField[] = [];
	let availNumbers: number[] =
		size === 2 ? [1, 2, 3, 4] : [1, 2, 3, 4, 5, 6, 7, 8, 9];

	for (let k = 0; k < size ** 2; k++) {
		const newX =
			(sectionNo - Math.floor(sectionNo / size) * size) * size +
			k -
			Math.floor(k / size) * size;
		const newY = Math.floor(sectionNo / size) * size + Math.floor(k / size);
		const newValue = createNumber(
			newX,
			newY,
			availNumbers,
			createdSections,
			difficulty
		);

		availNumbers = availNumbers.filter((evt) => evt !== newValue);
		sectionResult.push({ x: newX, y: newY, value: newValue });
	}

	return sectionResult;
};

const createNumber = (
	x: number,
	y: number,
	freeNumbers: number[],
	gameTillNow: sudokuField[][],
	difficulty: number
): number | undefined => {
	let availNbms = freeNumbers;
	let works: boolean = false;
	let resultValue: number | undefined = 0;

	while (!works) {
		const chosenNumber: number =
			availNbms[Math.floor(Math.random() * availNbms.length)];
		let failed: boolean = false;

		if (gameTillNow !== undefined) {
			gameTillNow.forEach((e = []) =>
				e.forEach((evt) => {
					if (evt.x === x || evt.y === y) {
						if (evt.value === chosenNumber) {
							availNbms = availNbms.filter((evt) => evt !== chosenNumber);
							failed = true;
							if (!availNbms.length) {
								works = true;
							}
						}
					}
				})
			);
		}

		if (failed === false) {
			works = true;
			resultValue = chosenNumber;
		}
	}
	return resultValue;
};

export const testIfLegit = (
	gameToTest: sudokuField[][],
	size: number
): boolean => {
	const sizeSquared = size ** 2;

	const flattedGameValues = gameToTest.flat(2).map((e) => e.value);

	if (flattedGameValues.includes(undefined)) {
		return false;
	}

	// Test the Boxes
	for (let i = 0; i < gameToTest.length; i++) {
		const works: boolean = new Set(gameToTest[i]).size === gameToTest[i].length;
		if (!works) {
			return false;
		}
	}

	// Test the Rows
	for (let i = 0; i < sizeSquared; i++) {
		const toTest: (number | undefined)[] = flattedGameValues.slice(
			i * sizeSquared,
			i * sizeSquared + sizeSquared
		);
		const works: boolean = new Set(toTest).size === toTest.length;
		if (!works) {
			return false;
		}
	}

	// Test for Colummmmmmmmmmmmmmns help mmmmmmmmmmmmy "mmmmmmmmm" key is stuck
	for (let i = 0; i < sizeSquared; i++) {
		let toTest: (number | undefined)[] = [];

		for (let k = 0; k < sizeSquared; k++) {
			const ind = i + k * sizeSquared;
			toTest[k] = flattedGameValues[ind];
		}

		const works: boolean = new Set(toTest).size === toTest.length;
		if (!works) {
			return false;
		}
	}
	return true;
};
