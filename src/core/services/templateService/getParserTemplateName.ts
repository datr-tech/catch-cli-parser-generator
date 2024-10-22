import { TemplateNamePrefixEnum } from '@app/config/enums';
import { ITemplateServiceGetTemplateNameConsumer } from '@app/interfaces/core/services/templateService';
import { getTemplateName } from './getTemplateName';

export const getParserTemplateName: ITemplateServiceGetTemplateNameConsumer = ({ parserDef }) =>
	getTemplateName({
		parserDef,
		namePrefix: TemplateNamePrefixEnum.PARSER,
	});
