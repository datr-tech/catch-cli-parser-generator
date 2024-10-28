export const assertStr = ({ value, name }) => {
	if (typeof value !== 'string' || !value) {
		if (name) {
			throw new Error(`Invalid '${name}'`);
		} else {
			throw new Error(`Unknown string error`);
		}
	}
};
