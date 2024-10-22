import Handlebars from 'handlebars';
import { assertParserDefLeaf, assertParserDefStem } from '@app/core/assertions';
import { getInterfaceTemplatePath, getTemplate } from '@app/core/services/templateService';
import { ICodeGeneratorHelperGenerateInterface } from '@app/interfaces/core/codeGeneratorHelpers';

export const generateInterfaceCodeHelper: ICodeGeneratorHelperGenerateInterface = ({
	parserDef,
	name,
}) => {
	assertParserDefLeaf({ parserDef });
	assertParserDefStem({ parserDef });

	const path = getInterfaceTemplatePath({ name });
	const template = getTemplate({ path });
	const codeTemplateFn = Handlebars.compile(template);

	return codeTemplateFn(parserDef);
};
