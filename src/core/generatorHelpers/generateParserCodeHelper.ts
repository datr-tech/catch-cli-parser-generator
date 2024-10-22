import Handlebars from 'handlebars';
import {
	getParserTemplateName,
	getParserTemplatePath,
	getTemplate,
} from '@app/core/services/templateService';

export const generateParserCodeHelper = ({ parserDef }) => {
	const name = getParserTemplateName({ parserDef });
	const path = getParserTemplatePath({ name });
	const template = getTemplate({ path });
	const parserCodeTemplateFn = Handlebars.compile(template);

	return parserCodeTemplateFn(parserDef);
};
