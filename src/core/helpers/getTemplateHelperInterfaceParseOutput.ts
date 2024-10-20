import { IHelperGetTemplateInterfaceConsumer } from '@app/interfaces/core/helpers';
import { getTemplateHelperInterface } from './getTemplateHelperInterface';
import { getTemplateNameHelperInterfaceParseOutput } from './getTemplateNameHelperInterfaceParseOutput';

export const getTemplateHelperInterfaceParseOutput: IHelperGetTemplateInterfaceConsumer =
	({ parserDef }) => {
		const templateName = getTemplateNameHelperInterfaceParseOutput({ parserDef });

		return getTemplateHelperInterface({ parserDef, templateName });
	};
