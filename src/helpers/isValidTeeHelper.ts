import { IHelperIsValidTee } from '@app/interfaces/helpers';

export const isValidTeeHelper: IHelperIsValidTee = ({ condition, validityFlagToUpdate }) => {
	const isValid = condition === true;

	if (validityFlagToUpdate) {
		validityFlagToUpdate.value = isValid;
	}

	return isValid;
};
