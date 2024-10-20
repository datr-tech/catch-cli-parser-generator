import { TemplateNamePrefixEnum } from '@app/config/enums';
import { getTemplateName } from './getTemplateName';
import { ITemplateServiceGetTemplateNameConsumer } from '@app/interfaces/core/services/templateService';

export const getInterfaceParseOutputTemplateName: ITemplateServiceGetTemplateNameConsumer = ({
	parserDef,
}) =>
	getTemplateName({
		parserDef,
		templateNamePrefix: TemplateNamePrefixEnum.INTERFACE_PARSE_OUTPUT,
	});
