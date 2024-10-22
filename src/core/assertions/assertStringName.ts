import { assertString } from './assertString';
import { IAssertStringName } from '@app/interfaces/core/assertions';

export const assertStringName: IAssertStringName = ({ name }) =>
	assertString({ value: name, name: 'name' });
