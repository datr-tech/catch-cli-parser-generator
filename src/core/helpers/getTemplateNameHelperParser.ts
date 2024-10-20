import { TemplateNamePrefixEnum } from '@app/config/enums';
import { IHelperGetTemplateNameConsumer } from '@app/interfaces/core/helpers';
import { getTemplateNameHelper } from './getTemplateNameHelper';

export const getTemplateNameHelperParser: IHelperGetTemplateNameConsumer = ({ parserDef }) =>
	getTemplateNameHelper({
		parserDef,
		templateNamePrefix: TemplateNamePrefixEnum.PARSER,
	});
