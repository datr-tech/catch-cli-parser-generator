import { assertString } from '@app/core/assertions/assertString';
import { IAssertStringCodeFilePath } from '@app/interfaces/core/assertions';

export const assertStringCodeFilePath: IAssertStringCodeFilePath = ({ codeFilePath }) =>
	assertString({ value: codeFilePath, name: 'codeFilePath' });
