import { assertString } from '@app/core/assertions/assertString';
import { IAssertStringPath } from '@app/interfaces/core/assertions';

export const assertStringPath: IAssertStringPath = ({ path }) =>
	assertString({ value: path, name: 'path' });
