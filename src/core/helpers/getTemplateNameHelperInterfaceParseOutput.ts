import { TemplateNamePrefixEnum } from '@app/config/enums';
import { IHelperGetTemplateNameConsumer } from '@app/interfaces/core/helpers';
import { getTemplateNameHelper } from './getTemplateNameHelper';

export const getTemplateNameHelperInterfaceParseOutput: IHelperGetTemplateNameConsumer =
	({ parserDef }) =>
		getTemplateNameHelper({
			parserDef,
			templateNamePrefix: TemplateNamePrefixEnum.INTERFACE_PARSE_OUTPUT,
		});
