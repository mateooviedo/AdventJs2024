function createFrame(names: string[]): string {
	// Find the longest name
	const width: number = Math.max(...names.map(name => name.length)) + 4;

	// Create borderY
	const borderY: string = '*'.repeat(width);

	// Create mask of names
	const wrapppedNames = names.map(name => `* ${name.padEnd(width - 4)} *`);

	// Create frame
	return `${borderY}\n${wrapppedNames.join('\n')}\n${borderY}`;
}

console.log(createFrame(['AA', 'BBBBB', 'CCC']));
