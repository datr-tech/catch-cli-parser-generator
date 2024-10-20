import Handlebars from 'handlebars';
import { IParserGenerator } from '@app/interfaces/core/generators/parserGenerator';
import {
	getTemplateNameHelperParser,
	getTemplatePathHelperParser,
	getTemplateHelper,
} from '@app/core/helpers';

export const parserGenerator: IParserGenerator = ({ parserDef }) => {
	const templateName = getTemplateNameHelperParser({ parserDef });
	const templatePath = getTemplatePathHelperParser({ templateName });
	const template = getTemplateHelper({ templatePath });

	const parserCodeTemplateFn = Handlebars.compile(template);
	const parserCode = parserCodeTemplateFn(parserDef);

	return {
		parserDef,
		parserCode,
	};
};
