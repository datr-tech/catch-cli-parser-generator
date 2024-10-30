import { assertStr } from '@app/assertions/assertStr';
import { IAssertionStrCode, IAssertionStrCodeInput } from '@app/interfaces/assertions';

export const assertStrCode: IAssertionStrCode = ({ code }: IAssertionStrCodeInput): void =>
	assertStr({
		name: 'code',
		value: code,
	});
