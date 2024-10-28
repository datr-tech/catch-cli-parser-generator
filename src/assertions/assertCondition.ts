export const assertCondition = ({ condition, message = '' }) => {
	if (condition === false) {
		if (message) {
			throw new Error(message);
		} else {
			throw new Error(message);
		}
	}
};
