import { assertString } from '@app/core/assertions/assertString';
import { IAssertStringCode } from '@app/interfaces/core/assertions';

export const assertStringCode: IAssertStringCode = ({ code }) => {
	assertString({ value: code, name: 'code' });

	return undefined;
};
