import { ICommonBool } from '@app/interfaces/common';
import { IHelperIsValidTee, IHelperIsValidTeeInput } from '@app/interfaces/helpers';

/**
 * @public
 *
 * Returns true when the received 'condition' is true. Otherwise, false.
 * The function also updates the value of 'validityFlagToUpdate'.
 *
 * @param {IHelperIsValidTeeInput} args
 * @param {ICommonBool} args.condition
 * @param {ICommonValidityFlag} args.validityFlagToUpdate
 * @returns {ICommonBool}
 */
export const isValidTeeHelper: IHelperIsValidTee = ({
	condition,
	validityFlagToUpdate,
}: IHelperIsValidTeeInput): ICommonBool => {
	const isValid = condition === true;

	if (validityFlagToUpdate) {
		validityFlagToUpdate.value = isValid;
	}

	return isValid;
};
