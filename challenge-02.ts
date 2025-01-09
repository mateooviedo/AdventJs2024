function createFrame(names: string[]): string {
	// Code here
	// Find the long name
	const longName: string | undefined = [...names].sort((a, b) => a.length - b.length).pop();
	const maxBorderFrame = longName ? longName.length + 4 : names.length;

	function createBorder(length: number, name?: string): string {
		let border = name ? `* ${name}` : '';
		const differenceBorderLength = name ? length - border.length : length;

		if (name) {
			for (let i = 1; i < differenceBorderLength; i++) {
				border = `${border} `;
			}

			border = `${border}*`
		} else {
			for (let i = 0; i < length; i++) {
				border = `${border}*`;
			}
		}

		return `${border}`;
	}

	let frame = `${createBorder(maxBorderFrame)}\n`;

	names.forEach(name => {
		frame = `${frame}${createBorder(maxBorderFrame, name)}\n`
	});

	frame = `${frame}${createBorder(maxBorderFrame)}`;
	return frame;
}
