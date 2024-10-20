import { FileExtensionEnum, TemplateNamePrefixEnum } from '@app/config/enums';
import { generateInterfaceCodeHelper } from '@app/core/codeGeneratorHelpers/index';
import { ICodeGeneratorHelperGenerateInterfaceConsumer } from '@app/interfaces/core/codeGeneratorHelpers';

export const generateInterfaceParserCodeHelper: ICodeGeneratorHelperGenerateInterfaceConsumer = ({
	parserDef,
}) => {
	const templateName = `${TemplateNamePrefixEnum.INTERFACE_PARSER}.${FileExtensionEnum.HBS}`;

	return generateInterfaceCodeHelper({ parserDef, templateName });
};
