import Handlebars from 'handlebars';
import {
	getParserTemplateName,
	getParserTemplatePath,
	getTemplate,
} from '@app/core/services/templateService';

export const generateParserCodeHelper = ({ parserDef }) => {
	const templateName = getParserTemplateName({ parserDef });
	const templatePath = getParserTemplatePath({ templateName });
	const template = getTemplate({ templatePath });
	const parserCodeTemplateFn = Handlebars.compile(template);

	return parserCodeTemplateFn(parserDef);
};
