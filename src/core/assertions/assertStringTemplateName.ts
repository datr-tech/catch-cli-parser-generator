import { assertString } from './assertString';
import { IAssertStringTemplateName } from '@app/interfaces/core/assertions';

export const assertStringTemplateName: IAssertStringTemplateName = ({ templateName }) =>
	assertString({ value: templateName, name: 'templateName' });
