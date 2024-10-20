import Handlebars from 'handlebars';
import { assertParserDefLeaf, assertParserDefStem } from '@app/core/assertions';
import { IHelperGetTemplateInterfaceBase } from '@app/interfaces/core/helpers';
import { getTemplateHelper } from './getTemplateHelper';
import { getTemplatePathHelperInterface } from './getTemplatePathHelperInterface';

export const getTemplateHelperInterface: IHelperGetTemplateInterfaceBase = ({
	parserDef,
	templateName,
}) => {
	assertParserDefLeaf({ parserDef });
	assertParserDefStem({ parserDef });

	const templatePath = getTemplatePathHelperInterface({ templateName });
	const template = getTemplateHelper({ templatePath });
	const codeTemplateFn = Handlebars.compile(template);

	return codeTemplateFn(parserDef);
};
