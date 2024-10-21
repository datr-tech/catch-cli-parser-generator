import { assertString } from './assertString';
import { IAssertStringParserName } from '@app/interfaces/core/assertions';

export const assertStringParserName: IAssertStringParserName = ({ parserName }) =>
	assertString({ value: parserName, name: 'parserName' });
