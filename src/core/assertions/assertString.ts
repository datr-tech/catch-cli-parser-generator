import { IAssertString } from '@app/interfaces/core/assertions';

export const assertString: IAssertString = ({ value, name }) => {
	if (!value) {
		const errorMessage = name ? `Invalid '${name}'` : 'Invalid string';

		throw new TypeError(errorMessage);
	}
};
