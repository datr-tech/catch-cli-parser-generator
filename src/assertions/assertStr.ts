import { CONSTS_ERRORS_STRING_UNKNOWN } from '@app/config/consts/errors';
import { IAssertionStr, IAssertionStrInput } from '@app/interfaces/assertions';
import { ICommonBool, ICommonErrorMessageStr, ICommonNameStr } from '@app/interfaces/common';
import { assertCondition } from './assertCondition';

export const assertStr: IAssertionStr = ({
	value,
	name = CONSTS_ERRORS_STRING_UNKNOWN,
}: IAssertionStrInput): void => {
	const condition: ICommonBool = typeof value === 'string' && !!value;
	const nameTrimmed: ICommonNameStr = name.trim();
	const nameResolved: ICommonNameStr = nameTrimmed ? nameTrimmed : CONSTS_ERRORS_STRING_UNKNOWN;
	const errorMessage: ICommonErrorMessageStr = `Invalid '${nameResolved}'`;

	assertCondition({ condition, errorMessage });
};
