import Handlebars from 'handlebars';
import { assertParserDefLeaf, assertParserDefStem } from '@app/core/assertions';
import { getInterfaceTemplatePath, getTemplate } from '@app/core/services/templateService';
import { ICodeGeneratorHelperGenerateInterface } from '@app/interfaces/core/codeGeneratorHelpers';

export const generateInterfaceCodeHelper: ICodeGeneratorHelperGenerateInterface = ({
	parserDef,
	templateName,
}) => {
	assertParserDefLeaf({ parserDef });
	assertParserDefStem({ parserDef });

	const templatePath = getInterfaceTemplatePath({ templateName });
	const template = getTemplate({ templatePath });
	const codeTemplateFn = Handlebars.compile(template);

	return codeTemplateFn(parserDef);
};
